import Money from "./Money";

export default class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to) {
    const amount = this.augend + this.addend;
    return new Money(amount, to)
  }

  toString() {
    return `sum: ${this.augend} + ${this.addend} = ${this.augend + this.addend}`
  }
}