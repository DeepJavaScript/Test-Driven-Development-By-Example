import { Expression } from "./expression";

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
}

class Sum implements Expression{
    constructor(public augend: Money, public addend: Money) {
    }

}

export  {
    Money,
    Sum,
    Expression
}