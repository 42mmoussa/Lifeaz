import {assert} from 'chai'
import {
    validateAuthor,
    validateContent,
    validateEmail, validateLink,
    validateTitle,
    validateType
} from '../../../src/core/utils/validator'

describe("Test of : ./src/core/utils/validator.ts", async () => {
    describe('validateEmail', async () => {
        it('(null or undefined) => false', async () => {
            assert.equal(validateEmail(null), false)
            assert.equal(validateEmail(undefined), false)
        })
        it('"" => false', async () => {
            assert.equal(validateEmail(""), false)
        })
        it('"email" => false', async () => {
            assert.equal(validateEmail("email"), false)
        })
        it('"email@email" => false', async () => {
            assert.equal(validateEmail("email@email"), false)
        })
        it('"email@emailcom" => false', async () => {
            assert.equal(validateEmail("email@emailcom"), false)
        })
        it('"emailemail.com" => false', async () => {
            assert.equal(validateEmail("emailemail.com"), false)
        })
        it('"email@emailcom." => false', async () => {
            assert.equal(validateEmail("email@emailcom."), false)
        })
        it('"@.com" => false', async () => {
            assert.equal(validateEmail("@.com"), false)
        })
        it('"@email.com" => false', async () => {
            assert.equal(validateEmail("@email.com"), false)
        })
        it('"@@email.com" => false', async () => {
            assert.equal(validateEmail("@@email.com"), false)
        })
        it('"email@email.com" => true', async () => {
            assert.equal(validateEmail("email@email.com"), true)
        })
        it('"email.email@email.com" => true', async () => {
            assert.equal(validateEmail("email.email@email.com"), true)
        })
        it('"email.email1-_1@email.com" => true', async () => {
            assert.equal(validateEmail("email.email1-_1@email.com"), true)
        })
        it('"email+test@email.com" => true', async () => {
            assert.equal(validateEmail("email+test@email.com"), true)
        })
        it('"email+test@sub.domaine.com" => true', async () => {
            assert.equal(validateEmail("email+test@sub.domaine.com"), true)
        })
        it('"email+test1_@thing.42.fr" => true', async () => {
            assert.equal(validateEmail("email+test1_@thing.42.fr"), true)
        })
    })
    describe("validateType", async () => {
        it('(null or undefined) => false', async () => {
            assert.equal(validateType(null), false)
            assert.equal(validateType(undefined), false)
        })
        it('"" => false', async () => {
            assert.equal(validateType(""), false)
        })
        it('" " => false', async () => {
            assert.equal(validateType(" "), false)
        })
        it('"Very long text, over 25 characters" => false', async () => {
            assert.equal(validateType("Very long text, over 25 characters"), false)
        })
        it('"Not a very long text." => true', async () => {
            assert.equal(validateType("Not a very long text."), true)
        })
        it('"Word" => true', async () => {
            assert.equal(validateType("Word"), true)
        })
    })
    describe("validateAuthor", async () => {
        it('(null or undefined) => false', async () => {
            assert.equal(validateAuthor(null), false)
            assert.equal(validateAuthor(undefined), false)
        })
        it('"" => false', async () => {
            assert.equal(validateAuthor(""), false)
        })
        it('" " => false', async () => {
            assert.equal(validateAuthor(" "), false)
        })
        it('"Very long text, over 30 characters" => false', async () => {
            assert.equal(validateAuthor("Very long text, over 25 characters"), false)
        })
        it('"Not a very long text." => true', async () => {
            assert.equal(validateAuthor("Not a very long text."), true)
        })
        it('"Word" => true', async () => {
            assert.equal(validateAuthor("Word"), true)
        })
    })
    describe("validateContent", async () => {
        it('(null or undefined) => false', async () => {
            assert.equal(validateContent(null), false);
            assert.equal(validateContent(undefined), false);
        })
        it('"" => false', async () => {
            assert.equal(validateContent(""), false);
        })
        it('" " => false', async () => {
            assert.equal(validateContent(" "), false);
        })
        it('"Not a very long text." => false', async () => {
            assert.equal(validateContent("Not a very long text."), false);
        })
        it('"Word" => false', async () => {
            assert.equal(validateContent("Word"), false);
        })
        it('string of len 40 => true', async () => {
            let toTest = '';
            let i = 0;
            for (i = 0; i < 40; i++) {
                toTest += "a"
            }
            assert.equal(validateContent(toTest), true);
        })
        it('string of len 240 => true', async () => {
            let toTest = '';
            let i = 0;
            for (i = 0; i < 240; i++) {
                toTest += "a"
            }
            assert.equal(validateContent(toTest), true);
        })
        it('string of len 241 => false', async () => {
            let toTest = '';
            let i = 0;
            for (i = 0; i < 241; i++) {
                toTest += "a"
            }
            assert.equal(validateContent(toTest), false);
        })
    })
    describe("validateTitle", async () => {
        it('(null or undefined) => false', async () => {
            assert.equal(validateTitle(null), false);
            assert.equal(validateTitle(undefined), false);
        })
        it('"" => false', async () => {
            assert.equal(validateTitle(""), false);
        })
        it('" " => false', async () => {
            assert.equal(validateTitle(" "), false);
        })
        it('"Not a very long text." => true', async () => {
            assert.equal(validateTitle("Not a very long text."), true);
        })
        it('"Word" => true', async () => {
            assert.equal(validateTitle("Word"), true);
        })
        it('"Very long text, over 30 characters" => true', async () => {
            assert.equal(validateTitle("Very long text, over 30 characters"), true);
        })
        it('string of len 41 => false', async () => {
            let toTest = '';
            let i = 0;
            for (i = 0; i < 41; i++) {
                toTest += "a"
            }
            assert.equal(validateTitle(toTest), false);
        })
    })
    describe("validateLink", async () => {
        it('(null or undefined) => false', async () => {
            assert.equal(validateLink(null), false);
            assert.equal(validateLink(undefined), false);
        })
        it('"" => false', async () => {
            assert.equal(validateLink(""), false);
        })
        it('" " => false', async () => {
            assert.equal(validateLink(" "), false);
        })
        it('"google" => false', async () => {
            assert.equal(validateLink("google"), false);
        })
        it('"httpgooglecom" => false', async () => {
            assert.equal(validateLink("httpgooglecom"), false);
        })
        it('"example.com" => true', async () => {
            assert.equal(validateLink("example.com"), true);
        })
        it('"http://example.com" => true', async () => {
            assert.equal(validateLink("http://www.example.com"), true);
        })
        it('"http://via.placeholder.com/300x300" => true', async () => {
            assert.equal(validateLink("http://via.placeholder.com/300x300"), true);
        })
        it('"https://fr.wikipedia.org/wiki/Uniform_Resource_Locator" => true', async () => {
            assert.equal(validateLink("https://fr.wikipedia.org/wiki/Uniform_Resource_Locator"), true);
        })
    })
})
