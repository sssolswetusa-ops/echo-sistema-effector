import json
import os
import urllib.request
import urllib.parse
from datetime import datetime, timedelta, timezone

import psycopg2

MSK = timezone(timedelta(hours=3))


def send_telegram(text: str) -> None:
    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode()
    req = urllib.request.Request(
        f'https://api.telegram.org/bot{token}/sendMessage',
        data=data,
        method='POST'
    )
    urllib.request.urlopen(req).read()


def handler(event: dict, context) -> dict:
    """Фиксирует посещение сайта и раз в сутки отправляет в Telegram сводку по визитам и заявкам"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    path = (body.get('path') or '/').strip()[:500]
    referrer = (body.get('referrer') or '').strip()[:500]

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    conn.autocommit = True
    cur = conn.cursor()

    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')

    cur.execute(
        f"INSERT INTO {schema}.site_visits (path, referrer) VALUES (%s, %s)",
        (path, referrer)
    )

    today_msk = datetime.now(MSK).date()

    cur.execute(f"SELECT MAX(digest_date) FROM {schema}.digest_log")
    last_digest_date = cur.fetchone()[0]

    if last_digest_date is None or last_digest_date < today_msk:
        period_start = last_digest_date if last_digest_date else (today_msk - timedelta(days=1))

        cur.execute(
            f"SELECT COUNT(*) FROM {schema}.site_visits WHERE visited_at >= %s AND visited_at < %s",
            (period_start, today_msk)
        )
        visits_count = cur.fetchone()[0]

        cur.execute(
            f"SELECT COUNT(*) FROM {schema}.leads WHERE created_at >= %s AND created_at < %s",
            (period_start, today_msk)
        )
        leads_count = cur.fetchone()[0]

        cur.execute(
            f"INSERT INTO {schema}.digest_log (digest_date) VALUES (%s) ON CONFLICT (digest_date) DO NOTHING",
            (today_msk,)
        )

        cur.close()
        conn.close()

        text = (
            '📊 *Статистика сайта за сутки*\n\n'
            f'👀 Посещений: *{visits_count}*\n'
            f'📩 Заявок: *{leads_count}*'
        )
        try:
            send_telegram(text)
        except Exception:
            pass
    else:
        cur.close()
        conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
