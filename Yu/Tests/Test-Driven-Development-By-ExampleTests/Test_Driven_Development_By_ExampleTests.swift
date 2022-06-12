import Test_Driven_Development_By_Example
import XCTest


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
    XCTAssertEqual(Franc(5), Franc(5))
    XCTAssertNotEqual(Franc(5), Franc(6))
  }
}
