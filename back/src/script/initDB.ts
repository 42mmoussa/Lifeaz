/**
 * Reset the database
 */
import fs from 'fs';
import pool from '../db/Pool';
import data from '../config/interventionMock.json';
import InterventionDB, {IIntervention} from '../db/intervention';


const fillValues = async (posts: IIntervention[]) => {
    for (const post of posts) {
        await InterventionDB.create(post.type, post.author, post.content, post.title, post.avatar, post.date);
    }
};

export const initDB = async (): Promise<void>  => {
    try {
        await pool.query('DROP TABLE IF EXISTS alpha_interventions;');
        await pool.query('DROP TABLE IF EXISTS intervention;');
        const sql: string[] = [];
        sql.push(fs.readFileSync('./src/config/database/timezone.sql').toString());
        sql.push(fs.readFileSync('./src/config/database/intervention.sql').toString());
        sql.push(fs.readFileSync('./src/config/database/alpha_intervention.sql').toString());
        for (const query of sql) {
            await pool.query(query);
        }
        await fillValues(data)
        console.log('Database initialized');
    } catch (e) {
        console.log(e.message);
    }
};
