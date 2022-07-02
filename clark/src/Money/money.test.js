const Dollar = require('../Dollar/Dollar.js');
const Franc = require('../Franc/Franc.js');

describe('Money', () => {
  test('equals', () => {
    expect(new Dollar(5).equals(new Franc(5))).toBe(false);
  });
})
