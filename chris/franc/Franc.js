import Money from './../money/Money'

export default class Franc extends Money {
  #amount
  constructor(amount) {
    super(amount)
    this.#amount = amount
  }

  times(multiplier) {
    return new Franc(this.#amount * multiplier);
  }
}

