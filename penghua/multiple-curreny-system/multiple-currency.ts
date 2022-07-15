abstract class Money {
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
        return new Dollar(amount, "USD");
    }

    static franc(amount: number) {
        return new Franc(amount, "CHF");
    }

    abstract times(multiplier: number);
}


class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number) {
        return Money.dollar(this.amount * multiplier);
    }
}

class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number) {
        return Money.franc(this.amount * multiplier);
    }
}

export  {
    Dollar,
    Franc,
    Money
}