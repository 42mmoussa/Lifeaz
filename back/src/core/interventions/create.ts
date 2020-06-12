import {Router, Request, Response} from 'express'
import InterventionDB, {IIntervention} from "../../db/intervention"
import {sortWordsOfText} from "../utils/sort"
import alphaIntervention from "../../db/alphaIntervention"
import {validateEmail} from "../utils/validator"

const router: Router = Router()

/**
 * POST /inspections
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
        const {type, author, content, title, avatar, email}: {[key: string]: string} = req.body

        if (!(type && author && content && title && avatar && email)) {
            throw new Error("Error: Missing argument")
        } else if (!validateEmail(email)) {
            throw new Error("Error: Email format is not valid")
        }

        const createdIntervention: IIntervention = await InterventionDB.create(type, author, content, title, avatar)

        const contentSorted: string = await sortWordsOfText(content)
        await alphaIntervention.create(createdIntervention.idintervention, contentSorted)

        return res.status(200).send("Success")
    } catch (e) {
        return res.status(400).send(e.message)
    }
})