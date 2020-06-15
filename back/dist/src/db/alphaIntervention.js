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
 * Database functions for an alpha_intervention
 */
class AlphaIntervention {
    /**
     * Creates a new alpah_intervention
     * Returns alpah_intervention data
     *
     * @param idIntervention: number
     * @param content: string
     *
     * @return Promise<IAlphaIntervention>
     */
    static create(idIntervention, content) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield Pool_1.default.query("INSERT INTO alpha_interventions (idIntervention, content) VALUES ($1, $2) RETURNING *", [idIntervention, content])).rows[0];
        });
    }
    /**
     * Return all alphaInterventions
     *
     * @return Promise<IAlphaIntervention[]>
     */
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield Pool_1.default.query("SELECT * from alpha_interventions")).rows;
        });
    }
}
exports.default = AlphaIntervention;
