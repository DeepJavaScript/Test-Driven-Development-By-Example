import { Dollar, Franc, Money } from "./multiple-currency";

describe("testMultiplication", () => {
    test("testMultiplication", () => {
        const five:Money = Money.dollar(5);
        expect(Money.dollar(5).equals(five.times(2))).toBeTruthy();
        expect(Money.dollar(5).equals(five.times(3))).toBeTruthy();

        const six:Money = Money.franc(6);
        expect(Money.franc(12).equals(six.times(2))).toBeTruthy();
        expect(Money.franc(18).equals(six.times(3))).toBeTruthy();
    })

    test("testEquality", () => {

        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();

        expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
        expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();

        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
    })
})
