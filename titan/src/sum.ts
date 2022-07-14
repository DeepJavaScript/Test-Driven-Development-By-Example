import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}
}
