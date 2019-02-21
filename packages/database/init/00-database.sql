CREATE DATABASE photo_sans;

\connect photo_sans;

CREATE SCHEMA photography;
CREATE TABLE photography.photos (
    id SERIAL PRIMARY KEY,
    title TEXT,
    body TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    admirers INT DEFAULT 0
);

COMMENT ON TABLE photography.photos IS
'Table to hold our photos and their praise'