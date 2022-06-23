export class Franc {
  #total;

  constructor(amount) {
    this.#total = amount;
  }

  times(multiplier) {
    return new Franc(this.#total * multiplier);
  }

  equals(obj)  {
    return this.#total === obj.amount;
  }

  get amount() {
    return this.#total;
  }
}
