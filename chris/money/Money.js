import MoneyFactory from "./MoneyFactory";

export default class Money {
  #amount
  #currency
  constructor(amount, currency = null) {
    this.#currency = currency
    this.#amount = amount
  }
  plus(addend) {
    return new Money(this.#amount + addend.#amount, this.#currency)
  }
  equals(money) {
    return this.valueOf() == money && this.#currency == money.currency()
  }
  times(multiplier) {
    return new Money(this.valueOf() * multiplier, this.#currency);
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

