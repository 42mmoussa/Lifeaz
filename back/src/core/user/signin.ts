import {Router, Request, Response} from 'express'

const router: Router = Router()

export default router.post('/', async(req: Request, res: Response) => {
    try {
        // get queries
        const {firstname, lastname, email, password, avatar}: {[key: string]: string} = req.body

        // check sigin information
        validateSignin(firstname, lastname, email, password, avatar)

        return res.status(200).json("Success")
    } catch (e) {
        res.status(500).send(e.message)
    }
})