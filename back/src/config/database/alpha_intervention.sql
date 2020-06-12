-- alpha_interventions --
CREATE TABLE alpha_interventions(
    idAlpha_interventions SERIAL PRIMARY KEY NOT NULL,
    idintervention integer NOT NULL references intervention(idIntervention),
    content TEXT NOT NULL
);
