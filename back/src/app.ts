import express, {Application, Request, Response} from "express"
import cors from "cors"

const app: Application = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes

import getInterventions from "./core/interventions/get"
app.use('/interventions', getInterventions)

import createInterventions from "./core/interventions/create"
app.use('/interventions', createInterventions)

// create user => POST /sigin
// login => POST /login
// modify profile => POST /profile/edit
// get profile => GET /profile

app.get('/login', (req: Request, res: Response) => {res.send('Hello')})

app.listen(5000, () => { console.log('Server running on port 5000') })