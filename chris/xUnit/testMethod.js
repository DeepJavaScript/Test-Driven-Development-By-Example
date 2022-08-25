const WasRun = require('./WasRun')

class TestCaseTest extends WasRun {
  constructor(name) {
    super(name)
  }

  testRunning() {
    const test = new WasRun('testMethod')
    console.log(test.wasRun)
    test.run()
    console.log(test.wasRun)
  }

  testSetUp() {
    const test = new WasRun('testMethod');
    test.run();
    console.log(this.wasSetUp) // false
  }
}

new TestCaseTest('testRunning').run();
new TestCaseTest('testSetUp').run();

// 透過繼承得到「獨立的 namespace」做到獨立測試環境
