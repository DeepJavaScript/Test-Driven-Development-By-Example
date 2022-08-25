class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {}
  tearDown() {}

  run(result) {
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

class TestSuite {
  constructor() {
    this.tests = [];
  }
  
  add(test) {
    this.tests.push(test);
  }

  run(result) {
    this.tests.forEach((test) => {
      test.run(result);
    });
    return result;
  }
}

class TestCaseTest extends TestCase {
  constructor(name) {
    super(name);
    this.result = null;
  }

  setUp() {
    this.result = new TestResult();
  }

  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run(this.result);
    console.assert(test.log === 'setUp testMethod tearDown ');
  }

  testResult() {
    const test = new WasRun('testMethod');
    test.run(this.result);
    console.assert('1 run, 0 failed' === this.result.summary);
  }

  testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    test.run(this.result);
    console.assert('1 run, 1 failed' === this.result.summary);
  }

  testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();
    console.assert('1 run, 1 failed' === this.result.summary);
  }

  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun('testMethod'));
    suite.add(new WasRun('testBrokenMethod'));
    suite.run(this.result);
    console.assert('2 run, 1 failed' === this.result.summary);
  }
}

const suite = new TestSuite();
suite.add(new TestCaseTest('testTemplateMethod'));
suite.add(new TestCaseTest('testResult'));
suite.add(new TestCaseTest('testFailedResult'));
suite.add(new TestCaseTest('testFailedResultFormatting'));
suite.add(new TestCaseTest('testSuite'));
const result = new TestResult();
suite.run(result);
console.log(result.summary);