import Money from './../money/Money'

export default class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency)
  }

  times(multiplier) {
    return new Dollar(this.valueOf() * multiplier);
  }
}
