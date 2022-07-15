class Money {
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

    times(multiplier: number) {
        return new Money(this.amount * multiplier, this.currency);
    }
}


class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

}

class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }
}

export  {
    Dollar,
    Franc,
    Money
}