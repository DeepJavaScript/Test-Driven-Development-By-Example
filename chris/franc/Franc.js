import Money from './../money/Money'

export default class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency)
  }

  times(multiplier) {
    return new Franc(this.valueOf() * multiplier);
  }
}

