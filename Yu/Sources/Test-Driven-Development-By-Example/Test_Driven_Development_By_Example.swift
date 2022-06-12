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
    public func times(_ mulitpler: Int) -> Money{
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
    override func times(_ mulitpler: Int) -> Money {
        Dollar(amount * mulitpler)
    }
}

internal class Franc: Money {
    override func times(_ mulitpler: Int) -> Money {
        Franc(amount * mulitpler)
    }
}
