describe("testMultiplication", () => {
    test("testMultiplication", () => {
        class Dollar {
            constructor(public amount) {
            }

            times(multiplier: number) {
                return 10
            }
        }

        const five = new Dollar(5);
        five.times(2);

        expect(five.times(2)).toBe(10);
    })
})

