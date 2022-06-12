public protocol Expression {}
public class Sum: Expression {
    public init(augend: Money, addend: Money) {
        self.augend = augend
        self.addend = addend
    }
    
    public var augend: Money
    public var addend: Money
    
    func reduce(_ to: String) -> Money {
        return Money(augend.amount + addend.amount, currency: to)
    }
}
