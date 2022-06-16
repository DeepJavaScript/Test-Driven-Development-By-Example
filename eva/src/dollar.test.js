import { Dollar } from './dollar';

test('test multiplication', () =>  {
  const five = new Dollar(5);
  expect(new Dollar(10).amount).toBe(five.times(2).amount);
  expect(new Dollar(15).amount).toBe(five.times(3).amount);
});

test('equality of two value objects with same params should be true', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
