import { Expression } from "./expression";
import { Bank } from "./bank";

class Money implements Expression {
    constructor(public amount: number, public currency: string) {
    }

    equals(object: object) {
        const money:Money = object as Money;
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

    times(multiplier: number): Expression {
        return new Money(this.amount * multiplier, this.currency);
    }

    public plus(addend: Expression): Expression {
        return new Sum(this, addend)
    }

    reduce(bank: Bank, to:string): Money {
        const rate: number = bank.rate(this.currency, to);
        return new Money(this.amount / rate, to);
    }
}

class Sum implements Expression{
    constructor(public augend: Expression, public addend: Expression) {
    }

    reduce(bank: Bank, to: string): Money {
        const amount: number = this.augend.reduce(bank, to).amount +
            this.addend.reduce(bank, to).amount;
        return new Money(amount, to);
    }

    plus(addend: Expression): Expression {
        return null
    }

}

export  {
    Money,
    Sum,
    Expression
}