class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {}

  run() {
    this.setUp();
    this[this.name]();
  }
}

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasRun = null;
    this.wasWetUp = null;
  }
  
  testMethod() {
    this.wasRun = true;
  }

  setUp() {
    this.wasRun = null;
    this.wasWetUp = true;
  }
}

class TestCaseTest extends TestCase {
  constructor(name) {
    super(name);
    this.test = null;
  }

  setUp() {
    this.test = new WasRun('testMethod');
  }

  testRunning() {
    this.test.run();
    console.assert(this.test.wasRun === true);
  }

  testSetUp() {
    this.test.run();
    console.assert(this.test.wasWetUp === true);
  }
}

new TestCaseTest('testRunning').run();
new TestCaseTest('testSetUp').run();
