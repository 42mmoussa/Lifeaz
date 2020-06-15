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
const Pool_1 = __importDefault(require("./Pool"));
/**
 * Database functions for an intervention
 */
class Intervention {
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
    static create(type, author, content, title, avatar, date) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!date) {
                date = new Date();
            }
            return (yield Pool_1.default.query("INSERT INTO intervention (type, author, content, title, avatar, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [type, author, content, title, avatar, date])).rows[0];
        });
    }
    /**
     * Return the number of interventions in the db
     *
     * return Promise<number>
     */
    static getNbIntervention() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Pool_1.default.query("SELECT COUNT(*) as count_res FROM intervention");
            const nbTotalInterventions = result.rows[0].count_res;
            return Number(nbTotalInterventions);
        });
    }
    /**
     * Returns the total number of page based on the number of elements to display in 1 page
     *
     * @param nbElements: number
     *
     * @return Promise<number>
     */
    static getNbPage(nbElements) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalNbInterventions = yield this.getNbIntervention();
            const totalNbPage = Math.ceil(totalNbInterventions / nbElements);
            return totalNbPage;
        });
    }
    /**
     * Return all elements of a page
     *
     * @param page
     * @param nbElements
     *
     * @return Promise<IInterventionPage>
     */
    static getByPage({ page = 1, nbElements = 5 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const offset = nbElements * (page - 1);
            const pageElement = yield Pool_1.default.query("SELECT * from intervention ORDER BY idIntervention DESC OFFSET $1 LIMIT $2", [offset, nbElements]);
            const interventionPage = {
                totalNbPage: yield this.getNbPage(nbElements),
                currentPage: page,
                nbElementsPerPage: nbElements,
                totalNbElement: yield this.getNbIntervention(),
                pageElement: pageElement.rows
            };
            return interventionPage;
        });
    }
}
exports.default = Intervention;
