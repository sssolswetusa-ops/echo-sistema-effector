CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT,
    phone TEXT,
    source TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
