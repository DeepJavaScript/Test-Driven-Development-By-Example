const Money = require('../Money/Money.js');

class Dollar extends Money {
  constructor(amount) {
    super(amount);
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

module.exports = Dollar;
