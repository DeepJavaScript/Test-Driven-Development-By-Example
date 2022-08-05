public class Bank {
    public init() {}
    var rates: [Pair: Int] = [:]
    public func reduce(_ source: any Expression, _ to: String) -> Money {
        return source.reduce(bank: self, to)
    }

    public func rate(_ from: String, _ to: String) -> Int {
        if from == to { return 1 }
        return rates[Pair(from: from, to: to)] ?? 0
    }

    public func addRate(_ from: String, _ to: String, _ rate: Int) {
        rates[Pair(from: from, to: to)] = rate
    }
}

struct Pair: Hashable {
    var from, to: String
}
