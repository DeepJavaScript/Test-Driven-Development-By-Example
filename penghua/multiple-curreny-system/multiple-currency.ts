abstract class Money {
    constructor(protected amount:number) {
    }

    equals(money: Money) {
        return this.amount === money.amount
                && this.constructor.name === money.constructor.name;
    }

    static dollar(amount: number) {
        return new Dollar(amount);
    }

    static franc(amount: number) {
        return new Franc(amount);
    }

    abstract times(multiplier: number);

    abstract getCurrency();
}


class Dollar extends Money {
    private currency: string;

    constructor(amount: number) {
        super(amount);
        this.currency = "USD"
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }

    getCurrency() {
        return this.currency;
    }
}

class Franc extends Money {
    private currency: string;

    constructor(amount: number) {
        super(amount);
        this.currency = "CHF"
    }

    times(multiplier: number) {
        return new Franc(this.amount * multiplier);
    }

    getCurrency() {
        return this.currency;
    }
}

export  {
    Dollar,
    Franc,
    Money
}