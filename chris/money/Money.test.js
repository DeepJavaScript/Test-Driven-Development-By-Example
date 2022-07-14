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
