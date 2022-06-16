export default class Franc {
  #amount;
  constructor(amount) {
    this.#amount = amount
  }

  times(multiplier) {
    return new Franc(this.#amount * multiplier);
  }

  equals(franc) {
    return this.#amount === franc.#amount
  }

  // for JavaScript style
  valueOf() {
    return this.#amount
  }
}

