import { it, assert, describe } from 'vitest'
// import Dollar from './../dollar/Dollar'
// import Franc from './../franc/Franc'
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
  it('testCurrency', () => {
    assert.equal("USD", MoneyFactory.dollar(5).currency())
    assert.equal("CHF", MoneyFactory.franc(5).currency())
  })
})