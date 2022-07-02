const Money = require('../Money/Money.js');

class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }
}

module.exports = Franc;
