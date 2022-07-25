import { Expression } from "./expression";
import {Bank} from "./bank";

class Money implements Expression {
    constructor(public amount: number, public currency: string) {
    }

    equals(money: Money) {
        return this.amount === money.amount
            && this.getCurrency() === money.getCurrency();
    }


    getCurrency() {
        return this.currency;
    }

    static dollar(amount: number) {
        return new Money(amount, "USD");
    }

    static franc(amount: number) {
        return new Money(amount, "CHF");
    }

    times(multiplier: number) {
        return new Money(this.amount * multiplier, this.currency);
    }

    plus(addend: Money): Expression {
        return new Sum(this, addend)
    }

    reduce(bank: Bank, to:string): Money {
        const rate: number = bank.rate(this.currency, to);
        return new Money(this.amount / rate, to);
    }
}

class Sum implements Expression{
    constructor(public augend: Money, public addend: Money) {
    }

    reduce(bank: Bank, to: string): Money {
        const amount: number = this.augend.amount + this.addend.amount;
        return new Money(amount, to);
    }

}

class Pair {
    constructor(private from: string, private to: string) {}

    Pair(from:string, to: string) {
        this.from = from;
        this.to = to;
    }

    equals(object: Object): boolean {
        const pair: Pair = object as Pair;
        return this.from === pair.from && this.to === pair.to;
    }

    hashCode(): number {
        return 0;
    }
}

export  {
    Money,
    Sum,
    Expression
}