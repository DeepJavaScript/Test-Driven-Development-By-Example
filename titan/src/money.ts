import { Dollar } from './dollar';

export abstract class Money {
  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  constructor(protected amount: number) {}

  equals(object: object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount && money.constructor === this.constructor
    );
  }
}
