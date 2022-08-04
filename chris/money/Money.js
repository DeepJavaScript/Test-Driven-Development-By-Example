import Bank from "./Bank"
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
  reduce(bank, to) {
    const rate = bank.getRate(this.#currency, to)
    console.log(this.#amount, rate, this.#amount / rate);
    return new Money(this.#amount / rate, to);
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

