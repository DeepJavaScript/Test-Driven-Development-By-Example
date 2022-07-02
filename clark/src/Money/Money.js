class Money {
  constructor(amount) {
    this.amount = amount;
  }

  equals(money) {
    return (
      this.amount === money.amount
      && Object.getPrototypeOf(this) === Object.getPrototypeOf(money)
    );
  }
}

module.exports = Money;
