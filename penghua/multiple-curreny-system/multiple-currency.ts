class Money {
    constructor(protected amount:number) {
    }

    equals(money: Money) {
        return this.amount === money.amount;
    }
}


class Dollar extends Money {
    times(multiplier: number) {
        return new Dollar(this._amount * multiplier);
    }
}

class Franc extends Money {
    times(multiplier: number) {
        return new Franc(this._amount * multiplier);
    }
}

export  {
    Dollar,
    Franc
}