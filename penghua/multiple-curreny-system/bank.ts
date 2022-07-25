import { Expression } from "./expression";
import { Money } from "./multiple-currency";

class Bank {
    reduce(source: Expression, to: string): Money {
        return source.reduce(to);
    }
}

export {
    Bank
}