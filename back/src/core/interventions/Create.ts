import {Router, Request, Response} from 'express'
import InterventionDB from "../../db/intervention"

const router: Router = Router()

/**
 * Create a new intervention in the database
 *
 * @query type
 * @query author
 * @query content
 * @query title
 * @query avatar
 */
export default router.post('/', async(req: Request, res: Response) => {
    try {
        const {type, author, content, title, avatar}: {[key: string]: string} = req.body

        if (!(type && author && content && title && avatar)) {
            throw new Error("Error: Missing argument")
        }

        await InterventionDB.create(type, author, content, title, avatar)

        return res.status(200).send("Success")
    } catch (e) {
        return res.status(400).send(e.message)
    }
})