import { Dollar, Franc } from "./multiple-currency";

describe("testMultiplication", () => {
    test("testMultiplication", () => {

        const five:Dollar = new Dollar(5);

        expect(new Dollar(10).equals(five.times(2))).toBeTruthy();
        expect(new Dollar(15).equals(five.times(3))).toBeTruthy();
    })

    test("testEquality", () => {

        const five:Dollar = new Dollar(5);
        expect(five.equals(five)).toBeTruthy();

        const six:Dollar = new Dollar(6);
        expect(five.equals(six)).toBeFalsy();
    })

    test("testFrancMultiplication", () => {

        const five:Franc = new Franc(5);

        expect(new Franc(10).equals(five.times(2))).toBeTruthy();
        expect(new Franc(15).equals(five.times(3))).toBeTruthy();
    })
})

