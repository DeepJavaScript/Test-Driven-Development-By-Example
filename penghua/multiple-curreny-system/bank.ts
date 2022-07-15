import { Expression } from "./expression";
import { Money } from "./multiple-currency";

class Bank {
    reduce(source: Expression, to: string): Money {
        return Money.dollar(10);
    }
}

export {
    Bank
}