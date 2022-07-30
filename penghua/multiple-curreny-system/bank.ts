import { Expression } from "./expression";
import { Money } from "./multiple-currency";

class Bank {
    reduce(source: Expression, to: string): Money {
        return source.reduce(this, to);
    }

    addRate(from: string, to: string, rate: number): void {
        this.rates[`${from}_${to}`] = rate;
    }

    rate(from: string, to: string): number {
        if (from === to) return 1;
        return this.rates[`${from}_${to}`];
    }

    private rates = {};

}

export {
    Bank
}