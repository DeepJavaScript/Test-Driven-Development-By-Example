export abstract class Money {
  protected amount = 0;

  static franc(amount: number): Money {
    return new Franc(amount);
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  abstract times(amount: number): Money;

  abstract currency(): string;

  equals(object: object): boolean {
    const money: Money = object as Money;
    return (
      this.amount === money.amount && money.constructor === this.constructor
    );
  }
}

export class Dollar extends Money {
  constructor(public amount: number) {
    super();
  }

  currency(): string {
    return 'USD';
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(public amount: number) {
    super();
  }

  currency(): string {
    return 'CHF';
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
