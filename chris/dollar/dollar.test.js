import { it, assert, describe } from 'vitest'
import Dollar from './Dollar'

describe('normal features', () => {
  it('test multiplication', () => {
    // prints name of the test
    const five = new Dollar(5)
    let product = five.times(2);
    // assert.equal(10, product.amount)
    assert.equal(true, new Dollar(10).equals(product))
    assert.equal(true, new Dollar(10) == 10) // for JavaScript style
    assert.equal(true, product == 10) // for JavaScript style
    product = five.times(3)
    assert.equal(15, product.amount)
  })
  it('test equals', () => {
    // prints name of the test
    assert.equal(true, new Dollar(5).equals(new Dollar(5)));
    assert.equal(false, new Dollar(5).equals(new Dollar(6)));
  })
})
