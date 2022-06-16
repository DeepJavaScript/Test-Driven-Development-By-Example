import { it, assert, describe } from 'vitest'
import Dollar from './Dollar'

describe('dollar test', () => {
  it('test multiplication', () => {
    // prints name of the test
    const five = new Dollar(5)

    // product = five.times(2)
    // assert.equal(10, product.amount)
    assert.equal(true, new Dollar(10).equals(five.times(2)))
    assert.equal(true, new Dollar(10) == 10) // for JavaScript style
    assert.equal(true, five.times(2) == 10) // for JavaScript style
    
    // product = five.times(3)
    // assert.equal(15, product.amount)
    assert.equal(true, new Dollar(15).equals(five.times(3)))
    assert.equal(true, new Dollar(15) == 15) // for JavaScript style
    assert.equal(true, five.times(3) == 15) // for JavaScript style

  })
  it('test equals', () => {
    // prints name of the test
    assert.equal(true, new Dollar(5).equals(new Dollar(5)));
    assert.equal(false, new Dollar(5).equals(new Dollar(6)));
  })
})
