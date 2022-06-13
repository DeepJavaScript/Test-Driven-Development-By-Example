import { Dollar } from './dollar';

test('5 美元 * 2 = 10 美元', () =>  {
  const five = new Dollar(5);

  let product = five.times(2);
  expect(product.amount).toBe(10);

test('equality of two value objects with same params should be true', () => {
  // toStrictEqual: test objects have same types and structure
  expect(new Dollar(5)).toStrictEqual(new Dollar(5));
  expect(new Dollar(5)).not.toStrictEqual(new Dollar(6));
});
