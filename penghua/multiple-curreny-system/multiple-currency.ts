class Money {
    constructor(protected amount:number) {
    }

    equals(money: Money) {
        return this.amount === money.amount
                && this.constructor.name === money.constructor.name;
    }
}


class Dollar extends Money {
    constructor(amount: number) {
        super(amount);
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }
}

class Franc extends Money {
    constructor(amount: number) {
        super(amount);
    }

    times(multiplier: number) {
        return new Franc(this.amount * multiplier);
    }
}

export  {
    Dollar,
    Franc
}