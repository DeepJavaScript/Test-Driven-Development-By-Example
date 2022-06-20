import Money from './../money/Money'

export default class Dollar extends Money {
  #amount;
  constructor(amount) {
    super(amount)
    this.#amount = amount
  }

  times(multiplier) {
    return new Dollar(this.#amount * multiplier);
  }
}

