import { it, assert, describe } from 'vitest'
// import Dollar from './Dollar'
import MoneyFactory from './../money/MoneyFactory'

describe('dollar test', () => {
  it('test multiplication', () => {
    const five = MoneyFactory.dollar(5)
    assert.equal(true, MoneyFactory.dollar(10).equals(five.times(2)), `${MoneyFactory.dollar(10)} ≠ ${five.times(2)}`)
    assert.equal(true, five.times(2) == 10) // for JavaScript style
    
    assert.equal(true, MoneyFactory.dollar(15).equals(five.times(3)))
    assert.equal(true, five.times(3) == 15) // for JavaScript style
  })

  it('test equals as integer', () => {
    assert.equal(true, MoneyFactory.dollar(10) == 10) // for JavaScript style
    assert.equal(true, MoneyFactory.dollar(10) != 10 + 1) // for JavaScript style
    assert.equal(true, MoneyFactory.dollar(15) == 15) // for JavaScript style
    assert.equal(true, MoneyFactory.dollar(15) != 15 - 1) // for JavaScript style
  })
  it('test equals as Object the same Class', () => {
    assert.equal(true, MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5)));
    assert.equal(false, MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6)));
  })
})
