const Money = require('../Money/Money.js');

class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multiplier) {
    return Money.dollar(this.amount * multiplier);
  }
}

module.exports = Dollar;
