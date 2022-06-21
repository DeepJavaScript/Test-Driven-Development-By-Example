export default class Money {
  #amount
  constructor(amount) {
    this.#amount = amount
    
    // protect is 延伸類別的私有屬性, but 這麼做變 public，只是共用了 #amount
    if (!('amount' in this)) {
      Object.defineProperty(Money.prototype, "amount", {
        set(value) {
          this.#amount = value
        },
        get() {
          return this.#amount
        },
      });
    }
  }
  equals(money) {
    return this.#amount === money.#amount
  }
  // for JavaScript style
  valueOf() {
    return this.#amount
  }
}