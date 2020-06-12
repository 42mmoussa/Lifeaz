import {assert} from 'chai'
import {validateEmail} from '../../../src/core/utils/validator'

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