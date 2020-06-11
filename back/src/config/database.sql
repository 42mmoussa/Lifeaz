CREATE DATABASE lifeaz;

set TIMEZONE='Europe/Paris'

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

-- alpha_interventions --
CREATE TABLE alpha_interventions(
    idAlpha_interventions SERIAL PRIMARY KEY NOT NULL,
    idIntervention integer NOT NULL references intervention(idIntervention),
    content TEXT NOT NULL
);

-- User --
CREATE TABLE users(
    idUser SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);