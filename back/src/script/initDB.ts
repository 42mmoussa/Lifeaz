/**
 * Initialize the database
 *
 * Execute this script from the folder /app in the container
 * ts-node src/script/initDB
 */
import fs from 'fs'
import pool from "../db/Pool"
import data from "../config/interventionMock.json"
import InterventionDB, {IIntervention} from "../db/intervention"

const initDB = async () => {
    try {
        const sql: string[] = []
        sql.push(fs.readFileSync('./src/config/database/timezone.sql').toString())
        sql.push(fs.readFileSync('./src/config/database/intervention.sql').toString())
        sql.push(fs.readFileSync('./src/config/database/alpha_intervention.sql').toString())
        for (const query of sql) {
            await pool.query(query)
        }
        console.log("Database initialized")
    } catch (e) {
        console.log(e.message)
    }
}

const fillValues = async (posts: IIntervention[]) => {
    for (const post of posts) {
        await InterventionDB.create(post.type, post.author, post.content, post.title, post.avatar)
    }
}

initDB()

fillValues(data)
