export default class Dollar {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object) {
    const dollar = object
    return this.amount === dollar.amount
  }
}