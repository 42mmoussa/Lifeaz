import express, {Application, NextFunction, Request, Response} from "express";
import cors from "cors";

import createInterventions from "./core/interventions/create";
import getInterventions from "./core/interventions/get";
import {initDB} from "./script/initDB";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/interventions', getInterventions);
app.use('/interventions', createInterventions);

app.listen(5000, async () => {
    await initDB()
    console.log('Server running on port 5000')
});