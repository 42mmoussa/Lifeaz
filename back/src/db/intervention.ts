import pool from "./Pool"
import {Query} from 'pg'

export interface IInterventionPage {
    totalNbPage: number
    currentpage: number
    nbElements: number
    pageElement: object[]
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
     * @return Promise<object[]>
     */
    static async create(type: string, author: string, content: string, title: string, avatar: string): Promise<object[]> {
        return (await pool.query(
            "INSERT INTO intervention (type, author, content, title, avatar) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [type, author, content, title, avatar]
        )).rows
    }

    /**
     * Returns the total number of page based on the number of elements to display in 1 page
     *
     * @param nbElements: number
     *
     * @return Promise<number>
     */
    static async getNbPage(nbElements: number): Promise<number> {
        const totalNbInterventions: number = (await pool.query(
            "SELECT COUNT(*) as count_res FROM intervention"
        )).rows[0].count_res

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
    static async getByPage({ page = 1, nbElements = 5 }: {page?:number, nbElements?:number}): Promise<IInterventionPage> {
        const offset = nbElements * (page - 1)

        const pageElement: Query = await pool.query(
            "SELECT * from intervention ORDER BY idIntervention DESC OFFSET $1 LIMIT $2",
            [offset, nbElements]
        )

        const interventionPage: IInterventionPage = {
            totalNbPage: await this.getNbPage(nbElements),
            currentpage: page,
            nbElements: nbElements,
            pageElement: pageElement.rows
        }
        return interventionPage
    }
}
