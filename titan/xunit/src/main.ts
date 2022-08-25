class TestCase {
  constructor(public name: string) {}

  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this[this.name]();
    } catch (error) {
      result.testFailed();
    }

    this.tearDown();
    return result;
  }

  setUp() {}

  tearDown() {}
}

class WasRun extends TestCase {
  log = '';

  constructor(public name: string) {
    super(name);
  }

  testMethod() {
    this.log += 'testMethod ';
  }

  setUp() {
    this.log = 'setUp ';
  }

  tearDown() {
    this.log += 'tearDown ';
  }

  testBrokenMethod() {
    throw new Error();
  }
}

class TestResult {
  runCount = 0;
  errorCount = 0;

  testStarted() {
    this.runCount++;
  }

  testFailed() {
    this.errorCount++;
  }

  summary() {
    return `${this.runCount} run, ${this.errorCount} failed`;
  }
}

class TestSuite {
  tests: TestCase[];

  constructor() {
    this.tests = [];
  }

  add(test: TestCase) {
    this.tests.push(test);
  }
}

class TestCaseTest extends TestCase {
  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert(test.log === 'setUp testMethod tearDown ');
  }

  testResult() {
    const test = new WasRun('testMethod');
    const result = test.run();
    console.assert(result.summary() === '1 run, 0 failed');
  }

  testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    const result = test.run();
    console.assert(result.summary() === '1 run, 1 failed');
  }

  testFailedResultFormatting() {
    const result = new TestResult();
    result.testStarted();
    result.testFailed();
    console.assert(result.summary() === '1 run, 1 failed');
  }

  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun('testMethod'));
    suite.add(new WasRun('testBrokenMethod'));
    const result = test.run();
    console.assert(result.summary() === '2 run, 1 failed');
  }
}

new TestCaseTest('testTemplateMethod').run();
new TestCaseTest('testResult').run();
new TestCaseTest('testFailedResult').run();
new TestCaseTest('testFailedResultFormatting').run();
new TestCaseTest('testSuite').run();
