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
exports.initDB = void 0;
/**
 * Reset the database
 */
const fs_1 = __importDefault(require("fs"));
const Pool_1 = __importDefault(require("../db/Pool"));
const interventionMock_json_1 = __importDefault(require("../config/interventionMock.json"));
const intervention_1 = __importDefault(require("../db/intervention"));
const fillValues = (posts) => __awaiter(void 0, void 0, void 0, function* () {
    for (const post of posts) {
        yield intervention_1.default.create(post.type, post.author, post.content, post.title, post.avatar, post.date);
    }
});
exports.initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Pool_1.default.query("DROP TABLE IF EXISTS alpha_interventions;");
        yield Pool_1.default.query("DROP TABLE IF EXISTS intervention;");
        const sql = [];
        sql.push(fs_1.default.readFileSync('./src/config/database/timezone.sql').toString());
        sql.push(fs_1.default.readFileSync('./src/config/database/intervention.sql').toString());
        sql.push(fs_1.default.readFileSync('./src/config/database/alpha_intervention.sql').toString());
        for (const query of sql) {
            yield Pool_1.default.query(query);
        }
        yield fillValues(interventionMock_json_1.default);
        console.log("Database initialized");
    }
    catch (e) {
        console.log(e.message);
    }
});
