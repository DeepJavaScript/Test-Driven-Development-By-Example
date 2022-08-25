const WasRun = require('./WasRun')

class TestCaseTest extends WasRun {
  constructor(name) {
    super(name)
  }

  // setUp() {
  // }
  
  testTemplateMethod() {
    this.test = new WasRun('testMethod')
    this.test.run();
    console.log('setUp testMethod tearDown ' === this.test.log) // false -> true
  }
}

new TestCaseTest('testTemplateMethod').run();

// 透過繼承得到「獨立的 namespace」做到獨立測試環境
