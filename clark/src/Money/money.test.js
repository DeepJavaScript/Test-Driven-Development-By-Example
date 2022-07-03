const Money = require('./Money.js');

describe('Money', () => {
  test('times', () => {
    const five = Money.dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  test('equals', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
  });

  test('getCurrency', () => {
    expect(Money.franc(1).getCurrency()).toBe('CHF');
    expect(Money.dollar(1).getCurrency()).toBe('USD');
  });
})
