import { it, assert, describe } from 'vitest'
import Sum from './Sum';
import Bank from './Bank';
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
    // Expression sum;
    const sum = new Sum(MoneyFactory.dollar(5), MoneyFactory.dollar(5))
    // assert.equal(true, MoneyFactory.dollar(10)(sum), `${MoneyFactory.dollar(10)} ≠ ${sum}`)
    
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD')
    assert.equal(true, MoneyFactory.dollar(10).equals(reduced), `${MoneyFactory.dollar(10)} ≠ ${reduced}`);
  })

  it('testPlusReturnSum', () => {
    const five = MoneyFactory.dollar(5)
    const sum = new Sum(five, five)
    assert.equal(true, five.equals(sum.augend))
    assert.equal(true, five.equals(sum.addend))
  })
  it('testReduceMoney', () => {
    const bank = new Bank();
    const result = bank.reduce(MoneyFactory.dollar(5), "USD")
    assert.equal(true, MoneyFactory.dollar(5).equals(result), `${MoneyFactory.dollar(10)} ≠ ${result}`)
  })
  it('testReduceMoneyDifferenceCurrency', () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2)

    const result = bank.reduce(MoneyFactory.franc(2), "USD")
    assert.equal(true, MoneyFactory.dollar(1).equals(result))
  })
  it('testSumPlusMoney', () => {
    const fiveBucks = MoneyFactory.dollar(5);
    const tenFrances = MoneyFactory.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum = new Sum(fiveBucks, tenFrances).plus(fiveBucks);
    const result = bank.reduce(sum, 'USD');
    assert.equal(true, MoneyFactory.dollar(15).equals(result), `${MoneyFactory.dollar(15)} ≠ ${result}`);
  })
})
