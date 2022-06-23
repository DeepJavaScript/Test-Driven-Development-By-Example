import { Money } from "./money";

export class Franc extends Money {
  constructor(amount) {
    super();
    this.total = amount;
  }

  times(multiplier) {
    return new Franc(this.total * multiplier);
  }

  get amount() {
    return this.total;
  }
}
