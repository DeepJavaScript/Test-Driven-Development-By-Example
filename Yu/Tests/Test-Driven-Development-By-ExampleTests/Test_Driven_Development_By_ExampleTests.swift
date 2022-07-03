import Test_Driven_Development_By_Example
import XCTest

final class WyCachTests: XCTestCase {
  func testMultiplication() throws {
    let five = Money.dollar(5)
    XCTAssertEqual(Money.dollar(10), five.times(2) as! Money)
    XCTAssertEqual(Money.dollar(15), five.times(3) as! Money)
  }

  func testFrancMultiplication() throws {
    let five = Money.franc(5)
    XCTAssertEqual(Money.franc(10), five.times(2) as! Money)
    XCTAssertEqual(Money.franc(15), five.times(3) as! Money)
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
    XCTAssertEqual(five, sum.augend as? Money)
    XCTAssertEqual(five, sum.addend as? Money)
  }

  func testReduceSum() throws {
    let sum = Sum(augend: Money.dollar(3), addend: Money.dollar(4))
    let bank = Bank()
    let result = bank.reduce(sum, "USD")
    XCTAssertEqual(Money.dollar(7), result)
  }

  func testReduceMoney() throws {
    let bank = Bank()
    let result = bank.reduce(Money.dollar(1), "USD")
    XCTAssertEqual(Money.dollar(1), result)
  }

  func testReduceMoneyDifferentCurrency() throws {
    let bank = Bank()
    bank.addRate("CHF", "USD", 2)
    let result = bank.reduce(Money.franc(2), "USD")
    XCTAssertEqual(Money.dollar(1), result)
  }

  func testIndentityRate() throws {
    XCTAssertEqual(1, Bank().rate("USD", "USD"))
  }

  func testMixedAddition() throws {
    let fiveBuck: Expression = Money.dollar(5)
    let tenFrancs: Expression = Money.franc(10)
    let bank = Bank()
    bank.addRate("CHF", "USD", 2)
    let result = bank.reduce(fiveBuck.plus(tenFrancs), "USD")
    XCTAssertEqual(Money.dollar(10), result)
  }

  func testSumPlusMoney() throws {
    let fiveBucks: Expression = Money.dollar(5)
    let tenFrancs: Expression = Money.dollar(10)
    let bank = Bank()
    bank.addRate("CHF", "USD", 2)
    let sum: Expression = Sum(augend: fiveBucks, addend: tenFrancs).plus(fiveBucks)
    let result: Money = bank.reduce(sum, "USD")
    XCTAssertEqual(Money.dollar(15), result)
  }
}
