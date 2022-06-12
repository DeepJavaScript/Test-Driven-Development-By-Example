@testable import Test_Driven_Development_By_Example
import XCTest
class Dollar: Equatable {
  private(set) var amount: Int
  init(_ amount: Int) {
    self.amount = amount
  }

  func times(_ mulitpler: Int) -> Dollar {
    Dollar(amount * mulitpler)
  }

  static func == (_ l: Dollar, _ r: Dollar) -> Bool {
    l.amount == r.amount
  }
}

class Franc: Equatable {
  private(set) var amount: Int
  init(_ amount: Int) {
    self.amount = amount
  }

  func times(_ mulitpler: Int) -> Franc {
    Franc(amount * mulitpler)
  }

  static func == (_ l: Franc, _ r: Franc) -> Bool {
    l.amount == r.amount
  }
}

final class WyCachTests: XCTestCase {
  func testMulitplication() throws {
    let five = Dollar(5)
    XCTAssertEqual(Dollar(10), five.times(2))
    XCTAssertEqual(Dollar(15), five.times(3))
  }

  func testFrancMulitplication() throws {
    let five = Franc(5)
    XCTAssertEqual(Franc(10), five.times(2))
    XCTAssertEqual(Franc(15), five.times(3))
  }

  func testEquality() throws {
    XCTAssertEqual(Dollar(5), Dollar(5))
    XCTAssertNotEqual(Dollar(5), Dollar(6))
  }
}
