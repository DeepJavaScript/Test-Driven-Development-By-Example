import { Expression } from './expression';

export class Money {
  constructor(protected amount: number, protected currency: string) {}

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

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currency);
  }
}
