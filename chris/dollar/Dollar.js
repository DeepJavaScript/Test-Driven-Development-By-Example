import Money from './../money/Money'

export default class Dollar extends Money {
  constructor(amount) {
    super(amount)
  }

  times(multiplier) {
    return new Dollar(this.valueOf() * multiplier);
  }
  currency() {
    return "USD"
  }
}
