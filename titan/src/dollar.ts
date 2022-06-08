export class Dollar {
  constructor(public amount: number) {

  }

  times(multiplier: number) {
    this.amount *= multiplier;
  }
}