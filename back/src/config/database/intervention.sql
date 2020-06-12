-- Intervention --
CREATE TABLE intervention(
    idIntervention SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    author VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    title VARCHAR(50) NOT NULL,
    date TIMESTAMP DEFAULT NOW() NOT NULL,
    avatar VARCHAR(255)
);
