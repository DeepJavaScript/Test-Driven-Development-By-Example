const Franc = require('./Franc.js');

describe('Franc', () => {
  test('times', () => {
    const five = new Franc(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });


  test('equals', () => {
    const five = new Franc(5);
    expect(five.equals(new Franc(5))).toBe(true);

    expect(five.equals(new Franc(6))).toBe(false);
  });
})
