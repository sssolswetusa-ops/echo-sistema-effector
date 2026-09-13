CREATE TABLE IF NOT EXISTS site_visits (
    id SERIAL PRIMARY KEY,
    visited_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    path TEXT,
    referrer TEXT
);

CREATE INDEX IF NOT EXISTS idx_site_visits_visited_at ON site_visits (visited_at);

CREATE TABLE IF NOT EXISTS digest_log (
    id SERIAL PRIMARY KEY,
    digest_date DATE NOT NULL UNIQUE,
    sent_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
