@testable import Test_Driven_Development_By_Example
import XCTest
class Dollar {
  private(set) var amount: Int
  init(_ amount: Int) {
    self.amount = amount
  }

  func times(_ mulitpler: Int) {
    amount *= mulitpler 
  }
}

final class WyCachTests: XCTestCase {
  func testMulitplication() throws {
    let five = Dollar(5)
    var product = five.times(2)
    XCTAssertEqual(10, product.amount)
    product = five.times(3)
    XCTAssertEqual(15, five.amount)
  }
}
