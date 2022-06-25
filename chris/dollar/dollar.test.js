import { it, assert, describe } from 'vitest'
import Dollar from './Dollar'

describe('dollar test', () => {
  it('test multiplication', () => {
    const five = new Dollar(5)
    assert.equal(true, new Dollar(10).equals(five.times(2)))
    assert.equal(true, five.times(2) == 10) // for JavaScript style
    
    assert.equal(true, new Dollar(15).equals(five.times(3)))
    assert.equal(true, five.times(3) == 15) // for JavaScript style
  })

  it('test equals as integer', () => {
    assert.equal(true, new Dollar(10) == 10) // for JavaScript style
    assert.equal(true, new Dollar(10) != 10 + 1) // for JavaScript style
    assert.equal(true, new Dollar(15) == 15) // for JavaScript style
    assert.equal(true, new Dollar(15) != 15 - 1) // for JavaScript style
  })
  it('test equals as Object the same Class', () => {
    assert.equal(true, new Dollar(5).equals(new Dollar(5)));
    assert.equal(false, new Dollar(5).equals(new Dollar(6)));
  })
})
