public protocol Expression {
  func reduce(bank: Bank, _: String) -> Money
}
