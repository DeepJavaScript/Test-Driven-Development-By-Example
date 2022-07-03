public protocol Expression {
  func reduce(bank: Bank, _: String) -> Money
}

public class Sum: Expression {
  public init(augend: Money, addend: Money) {
    self.augend = augend
    self.addend = addend
  }

  public var augend: Money
  public var addend: Money

  public func reduce(bank: Bank, _ to: String) -> Money {
    let amount: Int = augend.reduce(bank: bank, to).amount + addend.reduce(bank: bank, to).amount
    return Money(amount, currency: to)
  }
}
