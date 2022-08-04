// import Sum from "./Sum"
export default class Money {
  #amount
  #currency
  constructor(amount, currency = null) {
    this.#currency = currency
    this.#amount = amount
  }
  equals(money) {
    return this.valueOf() == money && this.#currency == money.currency()
  }
  times(multiplier) {
    return new Money(this.valueOf() * multiplier, this.#currency);
  }
  reduce(to) {
    return this;
  }
  // for JavaScript style
  valueOf() {
    return this.#amount
  }
  toString() {
    return `currency ${this.#currency}, amount ${this.#amount}`
  }
  getAmount() {
    return this.#amount
  }
  currency() {
    return this.#currency
  }
}

