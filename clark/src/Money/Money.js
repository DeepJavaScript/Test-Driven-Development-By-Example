class Money {
  constructor(amount) {
    this.amount = amount;
  }

  static dollar(amount) {
    const Dollar = require('../Dollar/Dollar.js');
    return new Dollar(amount)
  }

  static franc(amount) {
    const France = require('../Franc/Franc.js');
    return new France(amount)
  }

  equals(money) {
    return (
      this.amount === money.amount
      && Object.getPrototypeOf(this) === Object.getPrototypeOf(money)
    );
  }
}

module.exports = Money;
