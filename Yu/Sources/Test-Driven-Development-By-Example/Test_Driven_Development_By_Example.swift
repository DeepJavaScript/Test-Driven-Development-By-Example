public class Money {
    var amount: Int
    var _currency: String

    public init(_ amount: Int, currency: String) {
        self.amount = amount
        self._currency = currency
    }

    public static func dollar(_ amount: Int) -> Money {
        Dollar(amount, currency: "")
    }

    public static func franc(_ amount: Int) -> Money {
        Franc(amount, currency: "")
    }

    public func times(_ mulitpler: Int) -> Money {
        preconditionFailure("abstract func")
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

internal class Dollar: Money {
    override init(_ amount: Int, currency: String) {
        super.init(amount, currency: "USD")
    }

    override func times(_ mulitpler: Int) -> Money {
        Money.dollar(amount * mulitpler)
    }
}

internal class Franc: Money {
    override init(_ amount: Int, currency: String) {
        super.init(amount, currency: "CHF")
    }

    override func times(_ mulitpler: Int) -> Money {
        Money.franc(amount * mulitpler)
    }
}
