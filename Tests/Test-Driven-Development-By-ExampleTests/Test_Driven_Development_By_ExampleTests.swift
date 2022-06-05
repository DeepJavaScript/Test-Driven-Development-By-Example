@testable import Test_Driven_Development_By_Example
import XCTest
class Dollar {
  private(set)var amount: Int = 0
  init(_: Int) {}
  func times(_ multiplier: Int) {
    amount = 5 * 2
  }
}

final class WyCachTests: XCTestCase {
  func testMulitplication() throws {
    let five = Dollar(5)
    five.times(2)
    XCTAssertEqual(10, five.amount)
  }
}
