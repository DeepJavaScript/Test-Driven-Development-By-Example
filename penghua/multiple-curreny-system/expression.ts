import { Money } from "./multiple-currency";
import { Bank } from "./bank";

export interface Expression {
    reduce(bank: Bank, to: string): Money;
}
