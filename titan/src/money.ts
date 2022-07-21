import { Bank } from './bank';
import { Expression } from './expression';
import { Sum } from './sum';

export class Money implements Expression {
  constructor(public amount: number, protected currency: string) {}

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  getCurrency(): string {
    return this.currency;
  }

  equals(object: object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount && this.getCurrency() === money.getCurrency()
    );
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}
