import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  private rates: RateMap = new RateMap();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    return this.rates.get(new Pair(from, to));
  }

  addRate(from: string, to: string, rate: number): void {
    this.rates.set(new Pair(from, to), rate);
  }
}

class Pair {
  constructor(private from: string, private to: string) {}

  equals(object: object): boolean {
    const pair: Pair = object as Pair;
    return this.from === pair.from && this.to === pair.to;
  }

  hashCode(): number {
    return 0;
  }
}

class RateMap extends Map<Pair, number> {
  constructor(iterable?: Iterable<[Pair, number]>) {
    super(iterable);
  }

  get(pair: Pair): number {
    const entries: [Pair, number][] = [...this.entries()];
    const entry: [Pair, number] | undefined = entries.find(([_pair]) =>
      _pair.equals(pair)
    );
    if (entry === undefined) {
      const defaultRate = 1;
      return defaultRate;
    } else {
      const [, rate] = entry;
      return rate;
    }
  }
}
