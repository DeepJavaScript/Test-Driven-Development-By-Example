import { Expression } from "./expression";
import { Money, Sum } from "./multiple-currency";

class Bank {
    reduce(source: Expression, to: string): Money {
        // 這個部分讓程式碼顯得醜陋不堪
        // 1. 強轉型：只適用於 Sum
        const sum:Sum = source as Sum;
        return sum.reduce(to);
    }
}

export {
    Bank
}