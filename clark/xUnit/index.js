class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {}
  tearDown() {}

  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();
    try {
      this[this.name]();
    } catch (e) {
      result.testFailed();
    }
    this.tearDown();
    return result;
  }
}

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasRun = null;
    this.wasWetUp = null;
    this.log = 'setUp ';
  }

  setUp() {
    this.wasRun = null;
    this.wasWetUp = true;
  }

  testMethod() {
    this.wasRun = true;
    this.log = `${this.log}testMethod `;
  }

  testBrokenMethod() {
    throw 'error';
  }

  tearDown() {
    this.wasRun = true;
    this.log = `${this.log}tearDown `;
  }
}

class TestResult {
  constructor() {
    this.runCount = 0;
    this.errorCount = 0;
  }

  get summary() {
    return `${this.runCount} run, ${this.errorCount} failed`;
  }

  testStarted() {
    this.runCount += 1;
  }

  testFailed() {
    this.errorCount += 1;
  }
}

class TestCaseTest extends TestCase {
  constructor(name) {
    super(name);
  }

  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert(test.log === 'setUp testMethod tearDown ');
  }

  testResult() {
    const test = new WasRun('testMethod');
    const result = test.run();
    console.assert('1 run, 0 failed' === result.summary);
  }

  testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    const result = test.run();
    console.assert('1 run, 1 failed' === result.summary);
  }
}

new TestCaseTest('testTemplateMethod').run();
new TestCaseTest('testResult').run();
new TestCaseTest('testFailedResult').run();
