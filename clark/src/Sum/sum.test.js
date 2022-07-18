const Money = require('../Money/Money.js');
const Bank = require('../Bank/Bank.js');
const Sum = require('./Sum.js');

describe('Sum', () => {
  test('test reduce sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(7).equals(result));
  });
})
