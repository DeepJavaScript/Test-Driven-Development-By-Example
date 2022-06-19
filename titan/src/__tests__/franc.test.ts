import { Franc } from '../franc';

describe('franc test', () => {
  it('multiplication', () => {
    const five: Franc = new Franc(5);

    expect(five.times(2).equals(new Franc(10))).toBeTruthy();
    expect(five.times(3).equals(new Franc(15))).toBeTruthy();
  });

  it('equals', () => {
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  });
});
