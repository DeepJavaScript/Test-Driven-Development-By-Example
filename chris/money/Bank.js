import Money from "./Money";

export default class Bank { 
  reduce(source, to) {
    if (source instanceof Money) return source // return Money type
    // else return Sum type
    const sum = source;
    return sum.reduce(to);
  }
}

