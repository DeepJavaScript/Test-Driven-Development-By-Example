import Money from "./Money";

export default class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount =
      this.augend.reduce(bank, to) +
      this.addend.reduce(bank, to);
    return new Money(amount, to)
  }

  toString() {
    return `sum: ${this.augend} + ${this.addend} = ${this.augend + this.addend}`
  }

  // plus(money) {
  //   return new Money(15, 'USD')
  // }
}