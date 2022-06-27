import { Dollar, Franc, Money } from "./multiple-currency";

describe("testMultiplication", () => {
    test("testMultiplication", () => {
        const five:Money = Money.dollar(5);
        expect(new Dollar(10).equals(five.times(2))).toBeTruthy();
        expect(new Dollar(15).equals(five.times(3))).toBeTruthy();

        const six:Franc = new Franc(6);
        expect(new Franc(12).equals(six.times(2))).toBeTruthy();
        expect(new Franc(18).equals(six.times(3))).toBeTruthy();
    })

    test("testEquality", () => {

        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();

        expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
        expect(new Franc(5).equals(new Franc(6))).toBeFalsy();

        expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
    })
})

