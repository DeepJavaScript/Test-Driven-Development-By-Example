export class Dollar {
  #total;

  constructor(amount) {
    this.#total = amount;
  }

  times(multiplier) {
    return new Dollar(this.#total * multiplier);
  }

  equals(obj)  {
    return this.#total === obj.amount;
  }

  get amount() {
    return this.#total;
  }
}
