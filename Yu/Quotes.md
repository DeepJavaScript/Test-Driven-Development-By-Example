@@ -1,3 +1,34 @@
# Test-Driven-Development-By-Example

A description of this package.
We'll start with the object that Ward created at WyCash, multi-currency money (refer to the Introduction). Suppose we have a report like this:

| Instrument | Shares | Price | Total |
| ---------- | ------ | ----- | ----- |
| IBM        | 1000   | 25    | 25000 |
| GE         | 400    | 100   | 40000 |
|            |        | Total | 65000 |

To make a multi-currency report, we need to add currencies:

| Instrument | Shares | Price    | Total     |
| ---------- | ------ | -------- | --------- |
| IBM        | 1000   | 25  USD  | 25000 USD |
| Novartis   | 400    | 150  CHF | 60000 CHF |
|            |        | Total    | 65000 USD |


We also need to specify exchange rates:
| From | To  | Rate |
| ---- | --- | ---- |
| CHF  | USD | 1.5  |


> will demonstrate the presence of code we are confident will compute the report correctly?
> - We need to be able to add amounts in two different currencies and convert the result given a set of exchange rates.
> - We need to be able to multiply an amount (price per share) by a number (number of shares) and receive an amount.


## How we do?

We'll make a to-do list to remind us what we need to do, to keep us focused, and to tell us when we are finished. When we start working on an item, we'll make it bold, **like this**. When we finish an item, we'll cross it off, ~~like this~~. When we think of another test to write, we'll add it to the list.
