import Bank from "./Bank";
import Money from "./Money";

export default class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount = this.augend + this.addend;
    return new Money(amount, to)
  }

  toString() {
    return `sum: ${this.augend} + ${this.addend} = ${this.augend + this.addend}`
  }

  plus() {
    return new Money(15, 'USD')
  }
}