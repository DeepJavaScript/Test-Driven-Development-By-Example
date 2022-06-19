import { Money } from './money';

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: object): boolean {
    const dollar: Dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}