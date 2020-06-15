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
const sort_1 = require("../../../src/core/utils/sort");
describe('sortWordsOfText', () => __awaiter(void 0, void 0, void 0, function* () {
    it('(null or undefined) => ""', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(yield sort_1.sortWordsOfText(null), "");
        chai_1.assert.equal(yield sort_1.sortWordsOfText(undefined), "");
    }));
    it('"" => ""', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(yield sort_1.sortWordsOfText(""), "");
    }));
    it('"a" => "a."', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(yield sort_1.sortWordsOfText("a"), "a.");
    }));
    it('"b a" => "a b."', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(yield sort_1.sortWordsOfText("b a"), "a b.");
    }));
    it('"a b c d" => "a b c d."', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(yield sort_1.sortWordsOfText("a b c d"), "a b c d.");
    }));
    it('"d c B a" => "a B c d."', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(yield sort_1.sortWordsOfText("d c B a"), "a B c d.");
    }));
    it('"Bb ba bd az aaa" => "aaa az ba Bb bd."', () => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.assert.equal(yield sort_1.sortWordsOfText("Bb ba bd az aaa"), "aaa az ba Bb bd.");
    }));
    it('"15 200 1000 8" => "1000 15 200 8."', () => __awaiter(void 0, void 0, void 0, function* () {
        const text = "15 200 1000 8";
        const expected = "1000 15 200 8.";
        chai_1.assert.equal(yield sort_1.sortWordsOfText(text), expected);
    }));
    it('"7 a 1z z1 az" => "1z 7 a az z1."', () => __awaiter(void 0, void 0, void 0, function* () {
        const text = "7 a 1z z1 az";
        const expected = "1z 7 a az z1.";
        chai_1.assert.equal(yield sort_1.sortWordsOfText(text), expected);
    }));
    it('"Hier, j’étais avec mon chien et j’ai vu un homme par terre, alors je l’ai sauvé." => "alors avec chien et Hier homme j’ai j’étais je l’ai mon par sauvé terre un vu."', () => __awaiter(void 0, void 0, void 0, function* () {
        const text = "Hier, j’étais avec mon chien et j’ai vu un homme par terre, alors je l’ai sauvé.";
        const expected = "alors avec chien et Hier homme j’ai j’étais je l’ai mon par sauvé terre un vu.";
        chai_1.assert.equal(yield sort_1.sortWordsOfText(text), expected);
    }));
}));
