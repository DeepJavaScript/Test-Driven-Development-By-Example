public class Money {
    var amount: Int

    public init(_ amount: Int) {
        self.amount = amount
    }

    public func equals(_ object: Any) -> Bool {
        false
    }
}

extension Money: Equatable {
    public static func == (lhs: Money, rhs: Money) -> Bool {
        lhs.equals(rhs)
    }
}


public class Dollar: Money {
    public func times(_ mulitpler: Int) -> Dollar {
        Dollar(amount * mulitpler)
    }
    public override func equals(_ object: Any) -> Bool {
        self.amount == (object as? Dollar)?.amount
    }
}

public class Franc: Money {
    public func times(_ mulitpler: Int) -> Franc {
        Franc(amount * mulitpler)
    }
    public override func equals(_ object: Any) -> Bool {
        self.amount == (object as? Franc)?.amount
    }
}
