const Dollar = require('./Dollar.js');

describe('Dollar', () => {
  test('times', () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });


  test('equals', () => {
    const five = new Dollar(5);
    expect(five.equals(new Dollar(5))).toBe(true);

    expect(five.equals(new Dollar(6))).toBe(false);
  });
})
