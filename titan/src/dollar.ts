export class Dollar {
  constructor(private amount: number) {

  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: object): boolean {
    const dollar: Dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}