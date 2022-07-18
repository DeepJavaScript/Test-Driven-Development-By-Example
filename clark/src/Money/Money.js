const Sum = require('../Sum/Sum.js');

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount) {
    return new Money(amount, 'USD')
  }

  static franc(amount) {
    return new Money(amount, 'CHF')
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(money) {
    return (
      this.amount === money.amount
      && this.currency === money.currency
    );
  }

  getCurrency() {
    return this.currency;
  }

  plus(addend) {
    return new Sum(this, addend);
  }

  reduce(bank, to) {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}

module.exports = Money;
