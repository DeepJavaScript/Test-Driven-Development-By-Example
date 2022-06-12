public protocol Expression {}
public class Sum:Expression {
    init(augend: Money, addend: Money) {
        self.augend = augend
        self.addend = addend
    }
    
    public var augend: Money
    public var addend: Money
}
