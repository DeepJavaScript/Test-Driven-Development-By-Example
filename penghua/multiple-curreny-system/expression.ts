import { Money } from "./multiple-currency";

export interface Expression {
    reduce(to: string): Money;
}
