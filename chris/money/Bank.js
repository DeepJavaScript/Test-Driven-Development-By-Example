import Money from "./Money";
// import MoneyFactory from "./MoneyFactory";

export default class Bank { 
  reduce(source, to) {
    const sum = source;
    const amount = sum.augend + sum.addend;
    return new Money(amount, to)
  }
}