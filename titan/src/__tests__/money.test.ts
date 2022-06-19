import { Dollar } from '../dollar';
import { Franc } from '../franc';

describe('money test', () => {
  it('dollar multiplication', () => {
    const five: Dollar = new Dollar(5);

    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });

  it('franc multiplication', () => {
    const five: Dollar = new Dollar(5);

    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });

  it('equals', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  });
});
