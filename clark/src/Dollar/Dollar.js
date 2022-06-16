class Dollar {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar) {
    return this.amount === dollar.amount;
  }
}

module.exports = Dollar;
