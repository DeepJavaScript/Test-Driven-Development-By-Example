class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount) {
    const Dollar = require('../Dollar/Dollar.js');
    return new Dollar(amount, 'USD')
  }

  static franc(amount) {
    const France = require('../Franc/Franc.js');
    return new France(amount, 'CHF')
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
}

module.exports = Money;
