class Money {
    readonly _amount: number;
    constructor(public amount:number) {
        this._amount = amount;
    }

    equals(money: Money) {
        return this._amount === money.amount;
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