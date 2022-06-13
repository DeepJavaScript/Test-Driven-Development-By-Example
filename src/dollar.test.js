import { Dollar } from './dollar';

test('$5 * 2 = $10', () =>  {
  const five = new Dollar(5);

  let product = five.times(2);
  expect(product.amount).toBe(10);
});

test('equality of two value objects with same params should be true', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
});
