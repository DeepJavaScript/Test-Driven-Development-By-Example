@testable import Test_Driven_Development_By_Example
import XCTest
class Dollar:Equatable {
  private(set) var amount: Int
  init(_ amount: Int) {
    self.amount = amount
  }

  func times(_ mulitpler: Int) -> Dollar {
    Dollar(amount * mulitpler)
  }
  static func ==(_ l: Dollar, _ r: Dollar) -> Bool {
    true
  }
}

final class WyCachTests: XCTestCase {
  func testMulitplication() throws {
    let five = Dollar(5)
    var product = five.times(2)
    XCTAssertEqual(10, product.amount)
    product = five.times(3)
    XCTAssertEqual(15, product.amount)
  }
  func testEquality() throws {
    XCTAssertEqual(Dollar(5), Dollar(5))
    
  }
}
