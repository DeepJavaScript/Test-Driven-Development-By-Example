import { Bank } from '../bank';
import { Expression } from '../expression';
import { Money } from '../money';
import { Sum } from '../sum';

describe('money test', () => {
  it('dollar multiplication', () => {
    const five: Money = Money.dollar(5);

    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();
  });

  it('franc multiplication', () => {
    const five: Money = Money.franc(5);

    expect(five.times(2).equals(Money.franc(10))).toBeTruthy();
    expect(five.times(3).equals(Money.franc(15))).toBeTruthy();
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
    expect(reduced.equals(Money.dollar(10))).toBeTruthy();
  });

  it('plus returns sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = result as Sum;
    expect(five.equals(sum.augend)).toBeTruthy();
    expect(five.equals(sum.addend)).toBeTruthy();
  });

  it('reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(result.equals(Money.dollar(7))).toBeTruthy();
  });

  it('reduce money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result.equals(Money.dollar(1))).toBeTruthy();
  });

  it('reduce money different currency', () => {
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(Money.franc(2), 'USD');
    expect(Money.dollar(1).equals(result)).toBeTruthy();
  });

  it('mixed addition', () => {
    const fiveBucks: Money = Money.dollar(5);
    const tenFrancs: Money = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(Money.dollar(10).equals(result)).toBeTruthy();
  });
});
