import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}

  reduce(bank: Bank, to: string): Money {
    const amount: number =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
