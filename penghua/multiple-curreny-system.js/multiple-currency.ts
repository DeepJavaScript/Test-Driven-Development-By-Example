class Dollar {
    private readonly _amount: number;
    constructor(public amount:number) {
        this._amount = amount;
    }

    times(multiplier: number) {
        return new Dollar(this._amount * multiplier);
    }

    equals(object: Dollar) {
        return this._amount === object.amount;
    }
}

class Franc {
    private readonly _amount: number;
    constructor(public amount:number) {
        this._amount = amount;
    }

    times(multiplier: number) {
        return new Franc(this._amount * multiplier);
    }

    equals(object: Franc) {
        return this._amount === object.amount;
    }
}

export  {
    Dollar,
    Franc
}