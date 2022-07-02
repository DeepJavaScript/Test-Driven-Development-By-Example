class Money {
  constructor(amount) {
    this.amount = amount;
  }

  equals(money) {
    return this.amount === money.amount;
  }
}

module.exports = Money;
