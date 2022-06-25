import { it, assert, describe } from 'vitest'
import Franc from './Franc'

describe('franc test', () => {
  it('test multiplication', () => {
    const five = new Franc(5)
    assert.equal(true, new Franc(10).equals(new Franc(10)))
    assert.equal(true, five.times(2) == 10) // for JavaScript style
    
    assert.equal(true, new Franc(15).equals(new Franc(15)))
    assert.equal(true, five.times(3) == 15) // for JavaScript style
  })

  it('test equals as integer', () => {
    assert.equal(true, new Franc(10) == 10) // for JavaScript style
    assert.equal(true, new Franc(10) != 10 + 1) // for JavaScript style
    assert.equal(true, new Franc(15) == 15) // for JavaScript style
    assert.equal(true, new Franc(15) != 15 - 1) // for JavaScript style
  })
  it('test equals as Object the same Class', () => {
    assert.equal(true, new Franc(5).equals(new Franc(5)));
    assert.equal(false, new Franc(5).equals(new Franc(6)));
  })
})
