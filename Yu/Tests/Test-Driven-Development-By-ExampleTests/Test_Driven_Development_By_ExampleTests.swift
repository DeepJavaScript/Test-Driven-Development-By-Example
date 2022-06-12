import Test_Driven_Development_By_Example
import XCTest

final class WyCachTests: XCTestCase {
    func testMulitplication() throws {
        let five = Money.dollar(5)
        XCTAssertEqual(Money.dollar(10), five.times(2))
        XCTAssertEqual(Money.dollar(15), five.times(3))
    }

    func testFrancMulitplication() throws {
        let five = Money.franc(5)
        XCTAssertEqual(Money.franc(10), five.times(2))
        XCTAssertEqual(Money.franc(15), five.times(3))
    }

    func testEquality() throws {
        XCTAssertEqual(Money.dollar(5), Money.dollar(5))
        XCTAssertNotEqual(Money.dollar(5), Money.dollar(6))
        XCTAssertNotEqual(Money.franc(5), Money.dollar(5))
    }

    func testCurrency() throws {
        XCTAssertEqual("USD", Money.dollar(1).currency())
        XCTAssertEqual("CHF", Money.franc(1).currency())
    }

    func testSimpleAddition() throws {
        let five = Money.dollar(5)
        let sum = five.plus(five)
        let bank = Bank()
        let reduced = bank.reduce(sum, "USD")
        XCTAssertEqual(reduced, Money.dollar(10))
    }
    func testPlusReturnsSum() throws {
        let five = Money.dollar(5)
        let sum = try XCTUnwrap(five.plus(five) as? Sum)
        XCTAssertEqual(five, sum.augend)
        XCTAssertEqual(five, sum.addend)
    }
}
