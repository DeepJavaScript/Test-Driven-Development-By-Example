import { it, assert, describe } from 'vitest'
import Dollar from './Dollar'

describe('normal features', () => {
  it('test multiplication', () => {
    // prints name of the test
    const five = new Dollar(5)
    five.times(2)
    assert.equal(10, five.amount)
  })
})
