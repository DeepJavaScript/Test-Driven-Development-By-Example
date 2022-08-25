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
  }
  
  testMethod(){
    this.wasRun = 1
  }
};
