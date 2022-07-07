import { Money } from './money';

export class Franc extends Money {
  constructor(public amount: number) {
    super();
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
