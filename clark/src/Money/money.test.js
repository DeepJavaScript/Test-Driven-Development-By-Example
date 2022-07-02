const Money = require('./Money.js');
const Dollar = require('../Dollar/Dollar.js');
const Franc = require('../Franc/Franc.js');

describe('Money', () => {
  test('equals', () => {
    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
  });

  test('test different class equality', () => {
    expect(new Money(5, 'CHF').equals(new Franc(5, 'CHF'))).toBe(true);;
  })
})
