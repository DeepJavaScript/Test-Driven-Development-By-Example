public class Money {
    var amount: Int

    public init(_ amount: Int) {
        self.amount = amount
    }

    public func equals(_ object: Any) -> Bool {
        let money = object as? Money
        return amount == money?.amount
        && type(of: self) == type(of: object)
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
}

public class Franc: Money {
    public func times(_ mulitpler: Int) -> Franc {
        Franc(amount * mulitpler)
    }
}
