import { Expression } from "./expression";
import { Money, Sum } from "./multiple-currency";

class Bank {
    reduce(source: Expression, to: string): Money {
        // 兩個部分讓程式碼顯得醜陋不堪
        // 1. 強轉型：只適用於 Sum
        // 2. 公開欄位與第二層深度的參考
        const sum:Sum = source as Sum;
        const amount:number = sum.augend.amount + sum.addend.amount;
        return new Money(amount, to);
    }
}

export {
    Bank
}