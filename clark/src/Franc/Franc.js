const Money = require('../Money/Money.js');

class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multiplier) {
    return Money.franc(this.amount * multiplier);
  }
}

module.exports = Franc;
