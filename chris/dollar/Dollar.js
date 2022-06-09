export default class Dollar {
  constructor(amount) {
    this.amount = amount
  }

  times(multiplier) {
    this.amount = this.amount * multiplier
    return null;
  }
}