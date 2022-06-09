import { Dollar } from "./multiple-currency";

describe("testMultiplication", () => {
    test("testMultiplication", () => {

        const five = new Dollar(5);
        five.times(2);

        expect(five.times(2)).toBe(10);
    })
})

