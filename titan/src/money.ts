export abstract class Money {
  protected amount = 0;
  protected currency = '';

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  abstract times(amount: number): Money;

  getCurrency(): string {
    return this.currency;
  }

  equals(object: object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount && money.constructor === this.constructor
    );
  }
}

export class Dollar extends Money {
  constructor(public amount: number, public currency: string) {
    super();
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(public amount: number, public currency: string) {
    super();
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
