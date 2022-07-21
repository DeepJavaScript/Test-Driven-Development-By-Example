import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

export class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }

  addRate(from: string, to: string, rate: number): void {}
}
