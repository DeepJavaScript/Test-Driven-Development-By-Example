# TDD

## 環境

node v16.14.0
npm 8.3.1
vite 2.9.9
vitest 0.14.1

## 步驟

1. 建立小小的測試
2. 執行測試，得到紅燈
3. 對程式碼進行小小修改
4. 執行所有測試，並通過所有測試，得到綠燈
5. 重構程式，消除重複的程式碼

## 記事

### Ch1

- 讓單元測試結果，成為 build 的延伸
- 依賴 (dependency) 與 重複 (duplication) 的觀念

> **重複 (duplication)**
> - 測試 code 與產品 code 之間有著相依性。
> - 目的: 在改動其中一個時，不更改另外一個 => 解除相依
> - 如果程式碼「依賴」於某一個套件時，就會出現「重複」，透過物件的抽象設計，可以解掉依賴，降低重複
> - 撰寫下一個測試之前，消除現有程式中的重複設計，確保滿足下一個測試的過程中，只需要針對一個變因調整程式
> 

### Ch2

測試驅動開發循環

1. 寫一個測試 -> 紅燈
2. 滿足綠燈的前提糙 code -> 綠燈 => 可用
3. 整理目前的糙 code -> 綠燈 => 簡潔

目的: 交付簡潔可用的程式碼

> architecture-driven development 方式完全相反
> 它是先處理簡䌇，再處理可用。

在此的退化，因為「先思考可用，再思考簡潔」的邏輯，選擇了不簡潔的做法。
目的在於先消除 side effect。

> 不潔的地方，現在尚未看清，只是一種感覺
> 等到 private 變數出現了，自然就清楚多了

### Ch3

有一個整數，並對它 +1 並不希望原本的整數有變化，而是得到一個新的整數結果。

可以把物件當作數值來使用，像我們使用 `Dollar` 一樣，這種做法稱作數值物件 (Value Object)。

#### 數值物件

- 一旦值透過建構式設定就不再改變。
- 就是所有對它的操作，都要回傳一個新的物件。(就像 Ch2 做的那樣)
- 要實作 `equals()` ，要依內部值的內容決定是否與另一個物件相同。
- 如果把數值物件當作 hash table 的 key 來用的話，除了實作 `equals()` 還要實作 `hashCode()`

### 測試驅動的三角定位法

- 只在兩個以上的例子時，才開始寫實際的產品 code
- 暫時忽略測試 code 與產品 code之間的重複 (就是那個直接 `return true`)
- 只有為了第二個例子要通過，才寫通用一點的產品 code

使用時機

- 不知道怎麼重構時，先重新思考再加一個不同的測試
- 對設計概念沒有靈感時，三角定位法可以提供不同的思路

> 三角定位法，可以理解成夾擊定理，利用邊界條件找出可行的區間。

## Ch4

將 amount 設定成 private
相對的也不需要 getAmount() 這樣的 getter 了。

## Ch5

複製 Dollar 當作 Franc，就有 Franc 了！Oh~Ya~超簡單的啦！
不對啦！只是先通過測試，之後要再重構一下

> 應該是要提取出它們之間的基礎類別，做繼承？(猜的)

## Ch6

對！這章要做基礎類別。
並且設定 protected 屬性。但是 JS 不支援，所以都設定成 public

另外一個方法就是用 JS 的 valueOf 的 method，提供給運算子 `==` 在自動轉態時做基礎型別比對用。

## Ch7

在 Class 中實作 `getClass()` 的 method，合理！但不完美。
在此使用 `constructor.name` 這個方式取得

## Ch8

工廠方法 Money.dollar 產生 Dollar 物件
但使用 Money 的變數接物件 five.times() 會報錯
所以將 Money 改成抽象類別 (但是 JS 會遇到循環相依的問題，所以在此改成「增加 MoneyFactory」)

## Ch9~Ch17

中略..

## Ch18

- 建立一個包含 flag 的 TestCase
  - 測試執行前: false
  - 測試執行後: true
  - TestCase 命名: WasRun
  - flag 命名: wasRun

```python
test = WasRun('testMethod')
print test.wasRun  # false -> None
test.testMethod()
print test.wasRun  # true -> 1
```
## Ch19

3A

- Arrange
  - 在不同的測試之間，通常很類似
- Act
- Assert

期望 Arrange 建立新物件，會有多頻繁？有兩條路

1. 效能: 建立一次，速度快！
2. 獨立: 每個測試都不相關，測試結果與其它測試不應該互相影響

目標: 測試不要有相依性

暫時假設我們能夠快速建立需要的物件
在每次測試之前，想把 WasRun 的 flag 設定成 `false`

## Ch20

在測試完畢之後，需要還原或釋放資源，可以在 tearDown() 做這件事。
這次看出差異的方式，不要直接增加一個 flag 完事，而是簡單記錄一下哪些方法被呼叫過，不斷增加記錄，就可以把各方法的呼叫順序記錄下來。

## Ch21

引入一個機制
確保即使在測試方法執行過程中發生例外，也一定呼叫 `tearDown()`

需要捕捉例外，但是現在做不會成功。

**WasRun**
```javascript
  testMethod(){
    // this.wasRun = 1
    this.log += 'testMethod '
    throw new Error('error')
  }
```

**TestCase**
```javascript
  run() {
    try {
      this.setUp()
      const method = this[this.name].bind(this);
      method()
    } catch (error) {
      console.log(error.message);
    } finally {
      this.tearDown()
    }
  }
```

Shell
```shell
chris $ node xUnit/testMethod.js
error
true
```

所以，希望可以在執行完，看見結果

```
chris $ node xUnit/testMethod.js
執行了 5 個測試，2 個失敗
TestCaseTest.testFooBar --- ZeroDivideException
MoneyTest.testNegation --- AssertionError
```

打算讓 `TestCase.run()` 回傳一個 TestResult 物件。
記錄執行結果