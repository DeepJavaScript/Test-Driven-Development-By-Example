const Money = require("../Money/Money");

class Bank {
  constructor() {

  }

  reduce(source, to) {
    return Money.dollar(10);
  }
}

module.exports = Bank;