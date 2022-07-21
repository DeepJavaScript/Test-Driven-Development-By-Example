import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {}
}

class Pair {
  constructor(private from: string, private to: string) {}
}
