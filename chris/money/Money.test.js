import { it, assert, describe } from 'vitest'
// import Dollar from './../dollar/Dollar'
// import Franc from './../franc/Franc'
import Money from './../money/Money'
import MoneyFactory from './../money/MoneyFactory'

describe('dollar and franc test', () => {
  it('test Franc and Dollar', () => {
    assert.equal(true, MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5)))
    assert.equal(false, MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6)))

    assert.equal(true, MoneyFactory.franc(5).equals(MoneyFactory.franc(5)))
    assert.equal(false, MoneyFactory.franc(5).equals(MoneyFactory.franc(6)))

    // 不用幣別，不相等
    const five = MoneyFactory.franc(5);
    assert.equal(false, MoneyFactory.franc(5).equals(MoneyFactory.dollar(5)))
  })

  it('test equals as integer', () => {
    assert.equal(true, MoneyFactory.dollar(10) == 10) // for JavaScript style
    assert.equal(true, MoneyFactory.dollar(10) != 10 + 1) // for JavaScript style
    assert.equal(true, MoneyFactory.dollar(15) == 15) // for JavaScript style
    assert.equal(true, MoneyFactory.dollar(15) != 15 - 1) // for JavaScript style
  })

  it('test multiplication', () => {
    const five = MoneyFactory.dollar(5)
    assert.equal(true, MoneyFactory.dollar(5).times(2) == 10) // for JavaScript style
    assert.equal(true, MoneyFactory.dollar(5).times(3) == 15) // for JavaScript style
  })

  it('testCurrency', () => {
    assert.equal("USD", MoneyFactory.dollar(5).currency())
    assert.equal("CHF", MoneyFactory.franc(5).currency())
  })

  it('testSimpleAddition', () => {
    const five = MoneyFactory.dollar(5);
    const sum = five.plus(MoneyFactory.dollar(5))
    assert.equal(true, MoneyFactory.dollar(10).equals(sum), `${MoneyFactory.dollar(10)} ≠ ${sum}`)
  })
})
