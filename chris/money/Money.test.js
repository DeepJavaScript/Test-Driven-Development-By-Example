import { it, assert, describe } from 'vitest'
import Dollar from './../dollar/Dollar'
import Franc from './../franc/Franc'

describe('dollar and franc test', () => {
  it('test Franc and Dollar', () => {
    assert.equal(true, new Dollar(5).equals(new Dollar(5)))
    assert.equal(false, new Dollar(5).equals(new Dollar(6)))

    assert.equal(true, new Franc(5).equals(new Franc(5)))
    assert.equal(false, new Franc(5).equals(new Franc(6)))

    // 匯率
    const five = new Franc(5);
    assert.equal(true, new Franc(5).equals(new Dollar(5)))
  })
})