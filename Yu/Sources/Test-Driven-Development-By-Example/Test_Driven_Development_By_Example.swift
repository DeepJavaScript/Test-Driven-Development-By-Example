public class Money {
    var amount: Int

    public init(_ amount: Int) {
        self.amount = amount
    }
}

extension Money: Equatable {
    public static func == (lhs: Money, rhs: Money) -> Bool {
        lhs.amount == rhs.amount
            && type(of: lhs) == type(of: rhs)
    }
}

public class Dollar: Money {
    public func times(_ mulitpler: Int) -> Money {
        Dollar(amount * mulitpler)
    }
}

public class Franc: Money {
    public func times(_ mulitpler: Int) -> Money {
        Franc(amount * mulitpler)
    }
}
