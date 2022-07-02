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

  equals(money) {
    return (
      this.amount === money.amount
      && Object.getPrototypeOf(this) === Object.getPrototypeOf(money)
    );
  }

  getCurrency() {
    return this.currency;
  }
}

module.exports = Money;
