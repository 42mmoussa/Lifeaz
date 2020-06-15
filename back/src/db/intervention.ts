import pool from "./Pool"
import {Query} from 'pg'

export interface IIntervention {
    idintervention?: number;
    type: string;
    author: string;
    content: string;
    title: string;
    date: string;
    avatar: string;
}

export interface IInterventionPage {
    totalNbPage: number;
    currentPage: number;
    nbElementsPerPage: number;
    totalNbElement: number;
    pageElement: IIntervention[];
}

/**
 * Database functions for an intervention
 */
export default class Intervention {
    /**
     * Creates a new intervention
     * Returns intervention data
     *
     * @param type: string
     * @param author: string
     * @param content: string
     * @param title: string
     * @param avatar: string
     *
     * @return Promise<IIntervention>
     */
    static async create(type: string, author: string, content: string, title: string, avatar: string, date?: string | Date): Promise<IIntervention> {
        if (!date) {
            date = new Date()
        }
        return (await pool.query(
            "INSERT INTO intervention (type, author, content, title, avatar, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [type, author, content, title, avatar, date]
        )).rows[0]
    }

    /**
     * Return the number of interventions in the db
     *
     * return Promise<number>
     */
    static async getNbIntervention(): Promise<number> {
        const result: Query = await pool.query("SELECT COUNT(*) as count_res FROM intervention")
        const nbTotalInterventions = result.rows[0].count_res
        return Number(nbTotalInterventions)
    }

    /**
     * Returns the total number of page based on the number of elements to display in 1 page
     *
     * @param nbElements: number
     *
     * @return Promise<number>
     */
    static async getNbPage(nbElements: number): Promise<number> {
        const totalNbInterventions: number = await this.getNbIntervention()

        const totalNbPage: number = Math.ceil(totalNbInterventions / nbElements)
        return totalNbPage
    }

    /**
     * Return all elements of a page
     *
     * @param page
     * @param nbElements
     *
     * @return Promise<IInterventionPage>
     */
    static async getByPage({page = 1, nbElements = 5}: { page?: number, nbElements?: number }): Promise<IInterventionPage> {
        const offset = nbElements * (page - 1)

        const pageElement: Query = await pool.query(
            "SELECT * from intervention ORDER BY idIntervention DESC OFFSET $1 LIMIT $2",
            [offset, nbElements]
        )

        const interventionPage: IInterventionPage = {
            totalNbPage: await this.getNbPage(nbElements),
            currentPage: page,
            nbElementsPerPage: nbElements,
            totalNbElement: await this.getNbIntervention(),
            pageElement: pageElement.rows
        }
        return interventionPage
    }
}
