import { it, assert, describe } from 'vitest'
import Franc from './Franc'
import MoneyFactory from './../money/MoneyFactory'

describe('franc test', () => {
  it('test multiplication', () => {
    const five = MoneyFactory.franc(5)
    assert.equal(true, MoneyFactory.franc(10).equals(MoneyFactory.franc(10)))
    assert.equal(true, five.times(2) == 10) // for JavaScript style
    
    assert.equal(true, MoneyFactory.franc(15).equals(MoneyFactory.franc(15)))
    assert.equal(true, five.times(3) == 15) // for JavaScript style
  })

  it('test equals as integer', () => {
    assert.equal(true, MoneyFactory.franc(10) == 10) // for JavaScript style
    assert.equal(true, MoneyFactory.franc(10) != 10 + 1) // for JavaScript style
    assert.equal(true, MoneyFactory.franc(15) == 15) // for JavaScript style
    assert.equal(true, MoneyFactory.franc(15) != 15 - 1) // for JavaScript style
  })
  it('test equals as Object the same Class', () => {
    assert.equal(true, MoneyFactory.franc(5).equals(MoneyFactory.franc(5)));
    assert.equal(false, MoneyFactory.franc(5).equals(MoneyFactory.franc(6)));
  })
})
