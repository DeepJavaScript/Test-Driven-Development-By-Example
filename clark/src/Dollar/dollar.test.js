const Money = require('../Money/Money.js');
const Dollar = require('./Dollar.js');

describe('Dollar', () => {
  test('times', () => {
    const five = Money.dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  test('equals', () => {
    const five = Money.dollar(5);
    expect(five.equals(Money.dollar(5))).toBe(true);

    expect(five.equals(Money.dollar(6))).toBe(false);
  });
})
