export class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(obj)  {
    return this.amount === obj.amount;
  }
}
