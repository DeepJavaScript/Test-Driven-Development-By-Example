import Bank from "./Bank"
import Sum from "./Sum"
export default class Money {
  #amount
  #currency
  constructor(amount, currency = null) {
    this.#currency = currency
    this.#amount = amount
  }
  times(multiplier) {
    // 乘法
    return new Money(this * multiplier, this.#currency);
  }
  plus(addend) {
    // 加法
    return new Sum(this, addend)
  }
  reduce(bank, to) {
    // 換匯
    const rate = bank.getRate(this.#currency, to)
    return new Money(this.#amount / rate, to);
  }
  equals(money) {
    return this.valueOf() == money && this.#currency == money.currency()
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

