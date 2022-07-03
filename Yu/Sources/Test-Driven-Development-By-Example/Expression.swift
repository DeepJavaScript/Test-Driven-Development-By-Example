public protocol Expression {
  func reduce(bank: Bank, _: String) -> Money
  func plus(_ addend: Expression) -> Expression
}
