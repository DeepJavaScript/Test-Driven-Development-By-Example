public protocol Expression{}
public class Money: CustomDebugStringConvertible {
    var amount: Int
    var _currency: String

    public init(_ amount: Int, currency: String) {
        self.amount = amount
        self._currency = currency
    }

    public static func dollar(_ amount: Int) -> Money {
        Money(amount, currency: "USD")
    }

    public static func franc(_ amount: Int) -> Money {
        Money(amount, currency: "CHF")
    }

    public func times(_ mulitpler: Int) -> Money {
        Money(amount * mulitpler, currency: _currency)
    }

    public func currency() -> String {
        _currency
    }
    public func plus(_ addend: Money) -> Expression {
        Money(amount+addend.amount, currency: currency())
    }
    public var debugDescription: String {
        amount.description + " " + currency()
    }
}

extension Money: Equatable {
    public static func == (lhs: Money, rhs: Money) -> Bool {
        lhs.amount == rhs.amount
        && lhs.currency() == rhs.currency()
    }
}
extension Money: Expression {}
