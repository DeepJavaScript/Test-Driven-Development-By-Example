export class Money {
  constructor(protected amount: number, protected currency: string) {}

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
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
      this.amount === money.amount && money.constructor === this.constructor
    );
  }
}

export class Dollar extends Money {
  constructor(public amount: number, public currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier, this.currency);
  }
}

export class Franc extends Money {
  constructor(public amount: number, public currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier, this.currency);
  }
}
