import { Money } from './money';

export class Dollar extends Money {
  constructor(amount) {
    super();
    this.total = amount;
  }

  times(multiplier) {
    return new Dollar(this.total * multiplier);
  }

  get amount() {
    return this.total;
  }
}
