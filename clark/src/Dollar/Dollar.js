const Money = require('../Money/Money.js');

class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }
}

module.exports = Dollar;
