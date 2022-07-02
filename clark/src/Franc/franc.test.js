const Money = require('../Money/Money.js');
const Franc = require('./Franc.js');

describe('Franc', () => {
  test('times', () => {
    const five = Money.franc(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });


  test('equals', () => {
    const five = Money.franc(5);
    expect(five.equals(Money.franc(5))).toBe(true);

    expect(five.equals(Money.franc(6))).toBe(false);
  });
})
