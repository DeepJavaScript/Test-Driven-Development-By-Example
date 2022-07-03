public class Sum: Expression {
  public init(augend: Expression, addend: Expression) {
    self.augend = augend
    self.addend = addend
  }

  public var augend: Expression
  public var addend: Expression

  public func reduce(bank: Bank, _ to: String) -> Money {
    let amount: Int = augend.reduce(bank: bank, to).amount + addend.reduce(bank: bank, to).amount
    return Money(amount, currency: to)
  }

  public func plus(_ addend: Expression) -> Expression {
    Sum(augend: self, addend: addend)
  }
  public func times(_ multiplier: Int) -> Expression {
    Sum(augend: augend.times(multiplier), addend: addend.times(multiplier))
  }
}
