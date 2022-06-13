class Dollar {
    constructor(public amount:number) {
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }

    equals(object: Dollar) {
        return this.amount === object.amount;
    }
}

export  {
    Dollar
}