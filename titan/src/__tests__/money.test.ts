import { Money } from '../money';

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

    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();

    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });
});
