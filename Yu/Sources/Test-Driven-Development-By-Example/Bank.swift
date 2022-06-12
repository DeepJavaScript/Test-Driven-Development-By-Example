public class Bank {
    public init() {}
    public func reduce(_ source: any Expression, _ to: String) -> Money {
        return source.reduce(to)
    }
}
