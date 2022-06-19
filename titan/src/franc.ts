import { Money } from './money';

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(object: object): boolean {
    const dollar: Franc = object as Franc;
    return this.amount === dollar.amount;
  }
}
