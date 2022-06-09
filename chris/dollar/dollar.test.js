import { it, assert, describe } from 'vitest'

describe('normal features', () => {
  it('test multiplication', () => {
    // prints name of the test
    const five = new Dollar(5)
    five.times(2)
    assert.equal(10, five.amount)
  })
})
