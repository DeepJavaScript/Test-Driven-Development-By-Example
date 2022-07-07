import { Money } from './money';

export class Dollar extends Money {
  constructor(public amount: number) {
    super();
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
