const Bank = require('./Bank.js');
const Money = require('../Money/Money.js')

describe('Bank', () => {
  test('test reduce money different currency', () => {
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result = bank.reduce(Money.franc(2), 'USD');
    expect(Money.dollar(1).equals(result)).toBe(true);
  });
})
