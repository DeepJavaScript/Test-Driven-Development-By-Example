class Dollar {
    constructor(public amount:number) {
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }
}

export  {
    Dollar
}