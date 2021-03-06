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

    public func reduce(bank _: Bank, _ to: String) -> Money {
        return Money(augend.amount + addend.amount, currency: to)
    }
}
