
export default class Money {
  #amount
  constructor(amount) {
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
    return this.valueOf() == money && this.getClass == money.getClass
  }
  // for JavaScript style
  valueOf() {
    return this.#amount
  }
}

