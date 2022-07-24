class TestCase {
  constructor(name) {
    this.name = name;
  }

  run() {
    this[this.name]();
  }
}

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasRun = null;
  }
  
  testMethod() {
    this.wasRun = true;
  }
}

class TestCaseTest {
  static testRunning() {
    const test = new WasRun('testMethod');
    console.assert(test.wasRun === null);
    test.run();
    console.assert(test.wasRun === true);
  }
}

TestCaseTest.testRunning();
