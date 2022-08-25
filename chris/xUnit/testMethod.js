const WasRun = require('./WasRun')

class TestCaseTest extends WasRun {
  constructor(name) {
    super(name)
  }

  setUp() {
    this.test = new WasRun('testMethod')
  }

  testTemplateMethod() {
    this.test.run();
    console.log(this.test.log === 'setUp testMethod ') // false -> true
  }
}

new TestCaseTest('testTemplateMethod').run();

// 透過繼承得到「獨立的 namespace」做到獨立測試環境
