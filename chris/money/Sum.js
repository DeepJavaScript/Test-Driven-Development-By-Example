import Money from "./Money";

export default class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }
  times(multiplier) {
    // 乘法
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
  }
  plus(addend) {
    // 加法
    return new Sum(this, addend)
  }
  reduce(bank, to) {
    // 加數與被加數都換匯
    // 並且 相加成指定的幣種
    const amount =
      this.augend.reduce(bank, to) +
      this.addend.reduce(bank, to);
    return new Money(amount, to)
  }

  toString() {
    return `sum: ${this.augend} + ${this.addend} = ${this.augend + this.addend}`
  }
}