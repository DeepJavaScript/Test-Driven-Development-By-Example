export default class Dollar {
  #amount;
  constructor(amount) {
    this.#amount = amount
  }

  times(multiplier) {
    return new Dollar(this.#amount * multiplier);
  }

  equals(dollar) {
    return this.#amount === dollar.#amount
  }

  // for JavaScript style
  valueOf() {
    return this.#amount
  }
}

