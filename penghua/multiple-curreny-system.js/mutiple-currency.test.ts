describe("testMultiplication", () => {
    test("testMultiplication", () => {
        class Dollar {
            constructor(public amount:number) {
            }

            times(multiplier: number) {
                return this.amount * multiplier;
            }
        }

        const five = new Dollar(5);
        five.times(2);

        expect(five.times(2)).toBe(10);
    })
})

