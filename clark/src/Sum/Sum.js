class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const Money = require('../Money/Money.js');
    const amount = this.augend.reduce(bank, to).amount
      + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  plus(addend) {
    return new Sum(this, addend);
  }

  times(multiplier) {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
  }
}

module.exports = Sum;
