public class Bank {
    public init() {}
    public func reduce(_ source: any Expression, _ to: String) -> Money {
        guard let sum = source as? Sum else {return Money(0, currency: to)}
        let amount = sum.augend.amount + sum.addend.amount
        return Money(amount, currency: to)
    }
}
