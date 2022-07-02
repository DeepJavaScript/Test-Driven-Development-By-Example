const Money = require('../Money/Money.js');

class Franc extends Money {
  constructor(amount) {
    super(amount);
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}

module.exports = Franc;
