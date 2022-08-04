
export default class Bank {
  addRate(fromCurrency, toCurrency, rate) {
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
    this.rate = rate;
  }
  
  getRate(from, to) {
    if (from === this.fromCurrency && to === this.toCurrency) return this.rate;
    else if (from === to) return 1;
    else null;
  }
  
  reduce(source, to) {
    const sum = source; // sum or money
    return sum.reduce(this, to);
  }
}

