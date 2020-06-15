"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const intervention_1 = __importDefault(require("../../db/intervention"));
const router = express_1.Router();
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
exports.default = router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get queries
        const page = Number(req.query.page);
        const nbElement = req.query.nb_element && !isNaN(Number(req.query.nb_element)) ? Number(req.query.nb_element) : 5;
        // check if queries are set correctly in the url
        if (page <= 0 || isNaN(page) || nbElement < 5) {
            return res.redirect(req.baseUrl + '/?page=1');
        }
        const interventions = yield intervention_1.default.getByPage({ page: page, nbElements: nbElement });
        // if the page does not exist, redirect
        if (interventions.pageElement.length == 0) {
            return res.redirect(req.baseUrl + '/?page=1');
        }
        return res.status(200).json(interventions);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
