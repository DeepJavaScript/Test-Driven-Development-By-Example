import { Bank } from '../bank';
import { Expression } from '../expression';
import { Money } from '../money';
import { Sum } from '../sum';

function expectMoneyEquals(actual: Expression, expected: Expression) {
  expect((actual as Money).equals(expected as Money)).toBeTruthy();
}

describe('money test', () => {
  it('dollar multiplication', () => {
    const five: Money = Money.dollar(5);

    expectMoneyEquals(five.times(2), Money.dollar(10));
    expectMoneyEquals(five.times(3), Money.dollar(15));
  });

  it('franc multiplication', () => {
    const five: Money = Money.franc(5);

    expectMoneyEquals(five.times(2), Money.franc(10));
    expectMoneyEquals(five.times(3), Money.franc(15));
  });

  it('equals', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();

    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  it('currency', () => {
    expect(Money.dollar(1).getCurrency()).toBe('USD');
    expect(Money.franc(1).getCurrency()).toBe('CHF');
  });

  it('simple addition', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expectMoneyEquals(reduced, Money.dollar(10));
  });

  it('plus returns sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = result as Sum;
    expectMoneyEquals(five, sum.augend);
    expectMoneyEquals(five, sum.addend);
  });

  it('reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expectMoneyEquals(result, Money.dollar(7));
  });

  it('reduce money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expectMoneyEquals(result, Money.dollar(1));
  });

  it('reduce money different currency', () => {
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(Money.franc(2), 'USD');
    expectMoneyEquals(result, Money.dollar(1));
  });

  it('mixed addition', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expectMoneyEquals(result, Money.dollar(10));
  });

  it('sum plus money', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result: Money = bank.reduce(sum, 'USD');
    expectMoneyEquals(result, Money.dollar(15));
  });
});
