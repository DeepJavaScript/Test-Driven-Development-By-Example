class Franc {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }

  equals(franc) {
    return this.amount === franc.amount;
  }
}

module.exports = Franc;
