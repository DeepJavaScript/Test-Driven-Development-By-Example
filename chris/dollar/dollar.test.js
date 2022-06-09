import { it, assert, describe } from 'vitest'
import Dollar from './Dollar'

describe('normal features', () => {
  it('test multiplication', () => {
    // prints name of the test
    const five = new Dollar(5)
    let product = five.times(2);
    assert.equal(10, product.amount)
    product = five.times(3)
    assert.equal(15, product.amount)
  })
})
