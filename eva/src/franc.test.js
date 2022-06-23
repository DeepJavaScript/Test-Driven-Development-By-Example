import { Franc } from "./franc";

test('test Franc multiplication', () =>  {
  const five = new Franc(5);
  expect(new Franc(10).amount).toBe(five.times(2).amount);
  expect(new Franc(15).amount).toBe(five.times(3).amount);
});