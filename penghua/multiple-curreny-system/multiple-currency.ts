abstract class Money {
    constructor(protected amount: number, protected currency: string) {
    }

    equals(money: Money) {
        return this.amount === money.amount
                && this.constructor.name === money.constructor.name;
    }


    getCurrency() {
        return this.currency;
    }

    static dollar(amount: number) {
        return new Dollar(amount, null);
    }

    static franc(amount: number) {
        return new Franc(amount, null);
    }

    abstract times(multiplier: number);
}


class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
        this.currency = "USD"
    }

    times(multiplier: number) {
        return Money.dollar(this.amount * multiplier);
    }
}

class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
        this.currency = "CHF"
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