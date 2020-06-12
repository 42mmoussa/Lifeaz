import pool from "./Pool"

export interface IAlphaIntervention {
    idalpha_interventions: number
    idintervention: number
    content: string
}

/**
 * Database functions for an alpha_intervention
 */
export default class AlphaIntervention {
    /**
     * Creates a new alpah_intervention
     * Returns alpah_intervention data
     *
     * @param idIntervention: number
     * @param content: string
     *
     * @return Promise<IAlphaIntervention>
     */
    static async create(idIntervention: number, content: string): Promise<IAlphaIntervention> {
        return (await pool.query(
            "INSERT INTO alpha_interventions (idIntervention, content) VALUES ($1, $2) RETURNING *",
            [idIntervention, content]
        )).rows[0]
    }

    /**
     * Return all alphaInterventions
     *
     * @return Promise<IAlphaIntervention[]>
     */
    static async get(): Promise<IAlphaIntervention[]> {
        return (await pool.query(
            "SELECT * from alpha_interventions"
        )).rows
    }
}
