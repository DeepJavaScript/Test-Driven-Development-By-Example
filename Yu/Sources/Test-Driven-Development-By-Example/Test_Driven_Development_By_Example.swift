public class Money {
    var amount: Int
    var _currency: String

    public init(_ amount: Int, currency: String) {
        self.amount = amount
        self._currency = currency
    }

    public static func dollar(_ amount: Int) -> Money {
        Dollar(amount, currency: "USD")
    }

    public static func franc(_ amount: Int) -> Money {
        Franc(amount, currency: "CHF")
    }

    public func times(_ mulitpler: Int) -> Money {
        Money(amount * mulitpler, currency: _currency)
    }

    public func currency() -> String {
        _currency
    }
}

extension Money: Equatable {
    public static func == (lhs: Money, rhs: Money) -> Bool {
        lhs.amount == rhs.amount
            && type(of: lhs) == type(of: rhs)
    }
}

internal class Dollar: Money {}

internal class Franc: Money {}
