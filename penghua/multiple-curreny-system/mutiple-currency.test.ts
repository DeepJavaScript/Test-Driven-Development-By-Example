import { Dollar, Franc, Money } from "./multiple-currency";

describe("testMultiplication", () => {
    test("testMultiplication", () => {
        const five:Money = Money.dollar(5);
        expect(Money.dollar(5).equals(five.times(2))).toBeTruthy();
        expect(Money.dollar(5).equals(five.times(3))).toBeTruthy();

        const six:Franc = new Franc(6);
        expect(new Franc(12).equals(six.times(2))).toBeTruthy();
        expect(new Franc(18).equals(six.times(3))).toBeTruthy();
    })

    test("testEquality", () => {

        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();

        expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
        expect(new Franc(5).equals(new Franc(6))).toBeFalsy();

        expect(new Franc(5).equals(Money.dollar(5))).toBeFalsy();
    })
})

