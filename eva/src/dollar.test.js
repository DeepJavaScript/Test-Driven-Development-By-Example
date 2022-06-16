import { Dollar } from './dollar';

test('test multiplication', () =>  {
  const five = new Dollar(5);

  let product = five.times(2);
  expect(product.amount).toBe(10);

  const ten = new Dollar(10).amount;
  expect(ten).toBe(product.amount);
});

test('equality of two value objects with same params should be true', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
