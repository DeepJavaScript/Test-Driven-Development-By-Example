const WasRun = require('./WasRun')

class TestCaseTest extends WasRun {
  constructor(name) {
    super(name)
  }

  setUp() {
    this.test = new WasRun('testMethod')
  }

  testRunning() {
    this.test.run()
    console.log(this.test.wasRun)
  }

  testSetUp() {
    this.test.run();
    console.log(this.test.log === 'setUp') // false -> true
  }
}

new TestCaseTest('testRunning').run();
new TestCaseTest('testSetUp').run();

// 透過繼承得到「獨立的 namespace」做到獨立測試環境
