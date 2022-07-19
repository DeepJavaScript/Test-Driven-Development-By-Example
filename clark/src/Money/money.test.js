const Bank = require('../Bank/Bank.js');
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

  test('simple addition', () => {
    /*
    const sum = Money.dollar(5).plus(Money.dollar(5));
    expect(Money.dollar(10));
    */
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(Money.dollar(10).equals(reduced)).toBe(true);
  });

  test('test mixed addition', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    
    expect(result.equals(Money.dollar(10))).toBe(true);
  });

  test('test plus return sum', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    expect(five.equals(sum.augend)).toBe(true);
    expect(five.equals(sum.addend)).toBe(true);
  });

  test('test reduce money', () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), 'USD');
    expect(Money.dollar(1).equals(result)).toBe(true);
  });
})
