class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount) {
    return new Money(amount, 'USD')
  }

  static franc(amount) {
    return new Money(amount, 'CHF')
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(money) {
    return (
      this.amount === money.amount
      && this.currency === money.currency
    );
  }

  getCurrency() {
    return this.currency;
  }

  plus(addend) {
    return new Money(this.amount + addend.amount, this.currency);
  }
}

module.exports = Money;
