
export default class Money {
  #amount
  constructor(amount, currency = null) {
    this._currency = currency
    this.#amount = amount
    if (!('getClass' in this)) {
      Object.defineProperty(Money.prototype, "getClass", {
        get() {
          return this.constructor.name
        },
      });
    }
  }
  equals(money) {
    return this.valueOf() == money && this.currency() == money.currency()
  }
  times(multiplier) {
    return new Money(this.valueOf() * multiplier, this.currency());
  }
  // for JavaScript style
  valueOf() {
    return this.#amount
  }
  toString() {
    return `currency ${this._currency}, amount ${this.#amount}`
  }
  getAmount() {
    return this.#amount
  }
  currency() {
    return this._currency
  }
}

