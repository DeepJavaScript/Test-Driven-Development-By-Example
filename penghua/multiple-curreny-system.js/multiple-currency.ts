class Dollar {
    constructor(public amount:number) {
    }

    times(multiplier: number) {
        return this.amount * multiplier;
    }
}

export  {
    Dollar
}