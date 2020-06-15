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
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const validator_1 = require("../../../src/core/utils/validator");
describe('validateEmail', () => __awaiter(void 0, void 0, void 0, function* () {
    it('(null or undefined) => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail(null), false);
        chai_1.assert.equal(validator_1.validateEmail(undefined), false);
    }));
    it('"" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail(""), false);
    }));
    it('"email" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email"), false);
    }));
    it('"email@email" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email@email"), false);
    }));
    it('"email@emailcom" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email@emailcom"), false);
    }));
    it('"emailemail.com" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("emailemail.com"), false);
    }));
    it('"email@emailcom." => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email@emailcom."), false);
    }));
    it('"@.com" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("@.com"), false);
    }));
    it('"@email.com" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("@email.com"), false);
    }));
    it('"@@email.com" => false', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("@@email.com"), false);
    }));
    it('"email@email.com" => true', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email@email.com"), true);
    }));
    it('"email.email@email.com" => true', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email.email@email.com"), true);
    }));
    it('"email.email1-_1@email.com" => true', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email.email1-_1@email.com"), true);
    }));
    it('"email+test@email.com" => true', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email+test@email.com"), true);
    }));
    it('"email+test@sub.domaine.com" => true', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email+test@sub.domaine.com"), true);
    }));
    it('"email+test1_@thing.42.fr" => true', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(validator_1.validateEmail("email+test1_@thing.42.fr"), true);
    }));
}));
