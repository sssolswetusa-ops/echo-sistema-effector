import json
import os
import urllib.request
import urllib.parse

import psycopg2

def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram"""

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
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    question = body.get('question', '').strip()
    source = body.get('source', 'Форма на сайте')

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    lines = [
        '📩 *Новая заявка с сайта*',
        '',
        f'👤 *Имя:* {name}',
        f'📞 *Контакт:* {phone}',
    ]
    if question:
        lines.append(f'💬 *Вопрос:* {question}')
    lines.append(f'📍 *Источник:* {source}')

    text = '\n'.join(lines)

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
    try:
        with urllib.request.urlopen(req, timeout=3) as resp:
            result = json.loads(resp.read())
    except Exception:
        pass

    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        conn.autocommit = True
        cur = conn.cursor()
        schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
        cur.execute(
            f"INSERT INTO {schema}.leads (name, phone, source) VALUES (%s, %s, %s)",
            (name, phone, source)
        )
        cur.close()
        conn.close()
    except Exception:
        pass

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }