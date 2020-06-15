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
const sort_1 = require("../utils/sort");
const alphaIntervention_1 = __importDefault(require("../../db/alphaIntervention"));
const validator_1 = require("../utils/validator");
const router = express_1.Router();
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
exports.default = router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, author, content, title, avatar, email } = req.body;
        if (!(type && author && content && title && avatar && email)) {
            throw new Error("Error: Missing argument");
        }
        else if (!validator_1.validateEmail(email)) {
            throw new Error("Error: Email format is not valid");
        }
        const createdIntervention = yield intervention_1.default.create(type, author, content, title, avatar);
        const contentSorted = yield sort_1.sortWordsOfText(content);
        yield alphaIntervention_1.default.create(createdIntervention.idintervention, contentSorted);
        return res.status(200).send("success");
    }
    catch (e) {
        return res.status(400).send(e.message);
    }
}));
