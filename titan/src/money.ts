export abstract class Money {
  static franc(amount: number): Money {
    return new Franc(amount);
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  protected amount = 0;

  abstract times(amount: number): Money;

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

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(public amount: number) {
    super();
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
