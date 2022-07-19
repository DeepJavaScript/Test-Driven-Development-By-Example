const Money = require('../Money/Money.js');
const Bank = require('../Bank/Bank.js');
const Sum = require('./Sum.js');

describe('Sum', () => {
  test('test reduce sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(7).equals(result)).toBe(true);
  });

  test('test sum plus money', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    // const sum = fiveBucks.plus(tenFrancs).plus(fiveBucks);
    const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(15).equals(result)).toBe(true);
  });

  test('test sum times', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const sum = new Sum(fiveBucks, tenFrancs).times(2);
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(20).equals(result)).toBe(true);
  });
})
