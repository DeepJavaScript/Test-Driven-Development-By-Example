class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {
    // nothing
  }

  run() {
    this.setUp()
    const method = this[this.name].bind(this);
    method()
  }
}

module.exports = class WasRun extends TestCase {
  constructor(name) {
    super(name)
    this.wasRun = 'None'
    this.wasSetUp = 0;
  }
  
  setUp(){
    this.wasSetUp = 1
    this.log = 'setUp'  // 之後改檢查這個
  }
  
  testMethod(){
    this.wasRun = 1
  }
};
