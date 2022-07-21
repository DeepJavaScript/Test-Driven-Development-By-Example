import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
