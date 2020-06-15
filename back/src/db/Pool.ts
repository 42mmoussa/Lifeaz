import {Pool} from "pg"
import * as dotenv from 'dotenv'

dotenv.config()

const pool: Pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB
})

export default pool