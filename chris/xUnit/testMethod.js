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
}

new TestCaseTest('testRunning').run();

// 透過繼承得到「獨立的 namespace」做到獨立測試環境
