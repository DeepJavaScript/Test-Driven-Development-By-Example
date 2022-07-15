import { Money, Expression } from "./multiple-currency";

describe("testMultiplication", () => {
    test("testMultiplication", () => {
        const five:Money = Money.dollar(5);
        expect(Money.dollar(10).equals(five.times(2))).toBeTruthy();
        expect(Money.dollar(15).equals(five.times(3))).toBeTruthy();

        const six:Money = Money.franc(6);
        expect(Money.franc(12).equals(six.times(2))).toBeTruthy();
        expect(Money.franc(18).equals(six.times(3))).toBeTruthy();
    })

    test("testEquality", () => {

        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
    })

    test("testCurrency", () => {
        expect(Money.dollar(1).getCurrency()).toBe("USD");
        expect(Money.franc(1).getCurrency()).toBe("CHF");
    })

    test("testSimpleAddition", () => {
        const five:Money = Money.dollar(5);
        const sum:Expression = five.plus(five);
        const bank:Bank = new Bank();
        const reduced = bank.reduce(sum, "USD");
        expect(Money.dollar(10).equals(reduced)).toBeTruthy();

    })
})

