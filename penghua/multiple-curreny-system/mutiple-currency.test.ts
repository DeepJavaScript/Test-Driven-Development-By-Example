import { Money, Sum } from "./multiple-currency";
import { Expression } from "./expression";
import { Bank } from "./bank"

describe("testMultiplication", () => {
    test("testMultiplication", () => {
        // simulate java assertEquals
        // note: jest 與 java 這邊參數的位置是相反的
        // 這邊只改寫一個，其他維持原本的寫法
        function expectMoneyEquals(a: Expression, b: Expression) {
            expect((a as Money).equals(b)).toBeTruthy();
        }

        const five:Money = Money.dollar(5);
        expectMoneyEquals(five.times(2), Money.dollar(10));
        expectMoneyEquals(five.times(3), Money.dollar(15));

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

    test("testPlusReturnSum", () => {
        const five:Money = Money.dollar(5);
        const result:Expression = five.plus(five);
        const sum = result as Sum;

        expect(five.equals(sum.augend)).toBeTruthy();
        expect(five.equals(sum.addend)).toBeTruthy();
    })

    test("testReduceSum", () => {
        const sum:Expression = new Sum(Money.dollar(3), Money.dollar(4));
        const bank:Bank = new Bank();
        const result:Money = bank.reduce(sum, "USD");

        expect(Money.dollar(7).equals(result)).toBeTruthy();
    })

    test("testReduceMoney", () => {
        const bank:Bank = new Bank();
        const result:Money = bank.reduce(Money.dollar(1), "USD");

        expect(Money.dollar(1).equals(result)).toBeTruthy();
    })

    test("testReduceMoneyDifferentCurrency", () => {
        const bank:Bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        const result:Money = bank.reduce(Money.franc(2), "USD");

        expect(Money.dollar(1).equals(result)).toBeTruthy();
    })

    test("testMixedAddition", () => {
        const fiveBucks: Expression = Money.dollar(5);
        const tenFrancs: Expression = Money.franc(10);
        const bank: Bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), "USD");

        expect(Money.dollar(10).equals(result)).toBeTruthy();
    })

    test("testSumPlusMoney", () => {
        const fiveBucks: Expression = Money.dollar(5);
        const tenFrancs: Expression = Money.franc(10);
        const bank: Bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);

        const result: Money = bank.reduce(sum, "USD");

        expect(Money.dollar(10).equals(result)).toBeTruthy();
    })
})

