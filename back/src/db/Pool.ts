import {Pool} from "pg"

const pool: Pool = new Pool({
    user: "mohamad",
    password: "password",
    host: "postgres",
    port: "5432",
    database: "lifeaz"
})

export default pool