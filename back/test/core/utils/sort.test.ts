import {assert} from 'chai'
import {sortWordsOfText} from '../../../src/core/utils/sort'

describe('sortWordsOfText', async () => {
    it('(null or undefined) => ""', async () => {
        assert.equal(await sortWordsOfText(null), "");
        assert.equal(await sortWordsOfText(undefined), "");
    });
    it('"" => ""', async () => {
        assert.equal(await sortWordsOfText(""), "")
    });
    it('"a" => "a."', async () => {
        assert.equal(await sortWordsOfText("a"), "a.")
    });
    it('"b a" => "a b."', async () => {
        assert.equal(await sortWordsOfText("b a"), "a b.")
    });
    it('"a b c d" => "a b c d."', async () => {
        assert.equal(await sortWordsOfText("a b c d"), "a b c d.")
    });
    it('"d c B a" => "a B c d."', async () => {
        assert.equal(await sortWordsOfText("d c B a"), "a B c d.")
    });
    it('"Bb ba bd az aaa" => "aaa az ba Bb bd."', async () => {
        assert.equal(await sortWordsOfText("Bb ba bd az aaa"), "aaa az ba Bb bd.")
    });
    it('"15 200 1000 8" => "1000 15 200 8."', async () => {
        const text: string = "15 200 1000 8";
        const expected: string = "1000 15 200 8.";
        assert.equal(await sortWordsOfText(text), expected)
    });
    it('"7 a 1z z1 az" => "1z 7 a az z1."', async () => {
        const text: string = "7 a 1z z1 az";
        const expected: string = "1z 7 a az z1.";
        assert.equal(await sortWordsOfText(text), expected)
    });
    it('"Hier, j’étais avec mon chien et j’ai vu un homme par terre, alors je l’ai sauvé." => "alors avec chien et Hier homme j’ai j’étais je l’ai mon par sauvé terre un vu."', async () => {
        const text: string = "Hier, j’étais avec mon chien et j’ai vu un homme par terre, alors je l’ai sauvé.";
        const expected: string = "alors avec chien et Hier homme j’ai j’étais je l’ai mon par sauvé terre un vu.";
        assert.equal(await sortWordsOfText(text), expected)
    })
});