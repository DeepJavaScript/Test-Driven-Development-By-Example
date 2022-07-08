const Money = require('../Money/Money.js');

class Bank {
  constructor() {

  }

  reduce(source, to) {
    return source.reduce(to);
  }
}

module.exports = Bank;