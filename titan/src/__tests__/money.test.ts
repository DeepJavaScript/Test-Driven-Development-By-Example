import { Dollar } from '../dollar';
import { Franc } from '../franc';
import { Money } from '../money';

describe('money test', () => {
  it('dollar multiplication', () => {
    const five: Money = Money.dollar(5);

    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();
  });

  it('franc multiplication', () => {
    const five: Franc = new Franc(5);

    expect(five.times(2).equals(new Franc(10))).toBeTruthy();
    expect(five.times(3).equals(new Franc(15))).toBeTruthy();
  });

  it('equals', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();

    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();

    expect(new Franc(5).equals(Money.dollar(5))).toBeFalsy();
  });
});
