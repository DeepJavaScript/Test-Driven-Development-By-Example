public class Money {
    var amount: Int

    public init(_ amount: Int) {
        self.amount = amount
    }

    public static func dollar(_ amount: Int) -> Money {
        Dollar(amount)
    }

    public static func franc(_ amount: Int) -> Money {
        Franc(amount)
    }

    public func times(_ mulitpler: Int) -> Money {
        preconditionFailure("abstract func")
    }

    public func currency() -> String {
        preconditionFailure("abstract func")
    }
}

extension Money: Equatable {
    public static func == (lhs: Money, rhs: Money) -> Bool {
        lhs.amount == rhs.amount
            && type(of: lhs) == type(of: rhs)
    }
}

internal class Dollar: Money {
    var _currency: String

    override init(_ amount: Int) {
        self._currency = "USD"
        super.init(amount)
    }

    override func times(_ mulitpler: Int) -> Money {
        Dollar(amount * mulitpler)
    }

    override func currency() -> String {
        _currency
    }
}

internal class Franc: Money {
    var _currency: String
    
    override init(_ amount: Int) {
        self._currency = "CHF"
        super.init(amount)
    }
    override func times(_ mulitpler: Int) -> Money {
        Franc(amount * mulitpler)
    }

    override func currency() -> String {
        _currency
    }
}
