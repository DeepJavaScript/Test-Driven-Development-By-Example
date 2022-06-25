export class Money {
  total;

  equals(obj)  {
    return this.total === obj.amount;
  }
}