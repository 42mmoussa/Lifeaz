import {Router, Request, Response} from 'express';
import InterventionDB, {IIntervention} from '../../db/intervention';
import {sortWordsOfText} from '../utils/sort';
import alphaIntervention from '../../db/alphaIntervention';
import {validateInterventionForm} from '../utils/validator';

const router: Router = Router();

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
export default router.post('/', async (req: Request, res: Response) => {
    try {
        const {type, author, content, title, avatar, email}: { [key: string]: string } = req.body;

        await validateInterventionForm(type, author, content, title, avatar, email);

        const createdIntervention: IIntervention = await InterventionDB.create(type.trim(), author.trim(), content.trim(), title.trim(), avatar.trim());

        const contentSorted: string = await sortWordsOfText(content);
        await alphaIntervention.create(createdIntervention.idintervention, contentSorted);

        return res.status(200).send('success');
    } catch (e) {
        return res.status(400).send(e.message);
    }
})