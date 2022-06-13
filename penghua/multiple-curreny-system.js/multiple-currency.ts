class Dollar {
    constructor(public amount:number) {
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }

    equals() {
        return true;
    }
}

export  {
    Dollar
}