export default class Money {
  #amount
  constructor(amount) {
    // protect is 延伸類別的私有屬性
    this.#amount = amount
  }
  equals(money) {
    return this.#amount === money.#amount
  }
  // for JavaScript style
  valueOf() {
    return this.#amount
  }
}