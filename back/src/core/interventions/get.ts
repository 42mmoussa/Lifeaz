import {Router, Request, Response} from 'express';
import interventionDB, {IInterventionPage} from '../../db/intervention';

const router: Router = Router();

/**
 * GET /inspections
 * Send inspections list, page number, total number of pages, number of elements in a page
 *
 * @query page: number
 * @query nb_element?: number
 *
 * example: domaine.com/inspections/?page=2&nb_element=10
 *
 */
export default router.get('/', async (req: Request, res: Response) => {
    try {
        // get queries
        const page = Number(req.query.page);
        const nbElement: number = req.query.nb_element && !isNaN(Number(req.query.nb_element)) ? Number(req.query.nb_element) : 5;

        // check if queries are set correctly in the url
        if (page <= 0 || isNaN(page) || nbElement < 5) {
            return res.redirect(req.baseUrl + '/?page=1');
        }

        const interventions: IInterventionPage = await interventionDB.getByPage({page: page, nbElements: nbElement});

        // if the page does not exist, redirect
        if (interventions.pageElement.length == 0) {
            return res.redirect(req.baseUrl + '/?page=1');
        }

        return res.status(200).json(interventions);
    } catch (e) {
        res.status(500).send(e.message);
    }
})