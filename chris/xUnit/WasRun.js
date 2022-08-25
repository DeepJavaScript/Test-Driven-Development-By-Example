class TestResult {
  constructor() {
    this.runCount = 0
  }
  testStarted() {
    this.runCount += 1
  }
  summary() {
    return `${this.runCount} run, 0 failed`
  }
}

class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {
    // nothing
  }

  run() {
    const result = new TestResult()
    result.testStarted()

    this.setUp()
    const method = this[this.name].bind(this);
    method()
    this.tearDown()

    return result
  }
  tearDown() {
    // nothing
  }
}

module.exports = class WasRun extends TestCase {
  constructor(name) {
    super(name)
    // this.wasRun = 'None'
    // this.wasSetUp = 0;
  }
  
  setUp(){
    // this.wasSetUp = 1
    this.log = 'setUp '  // 之後改檢查這個
  }
  
  testMethod(){
    // this.wasRun = 1
    this.log += 'testMethod '
  }

  tearDown() {
    // this.wasSetUp = 1
    this.log += 'tearDown '  // 之後改檢查這個
  }
};
