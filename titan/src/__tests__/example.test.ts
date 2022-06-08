import { Dollar } from '../dollar';

it('multiplication', ( ) => {
  const five: Dollar = new Dollar(5);
  five.times(2);
  expect(five.amount).toBe(10);
}); 