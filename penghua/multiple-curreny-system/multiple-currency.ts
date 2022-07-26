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

export  {
    Money,
    Sum,
    Expression
}