class TestCase {
  constructor(public name: string) {}

  run(result: TestResult) {
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

  run(result: TestResult) {
    for (const test of this.tests) {
      test.run(result);
    }
  }
}

class TestCaseTest extends TestCase {
  private result!: TestResult;

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
    console.assert(this.result.summary() === '1 run, 0 failed');
  }

  testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    test.run(this.result);
    console.assert(this.result.summary() === '1 run, 1 failed');
  }

  testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();
    console.assert(this.result.summary() === '1 run, 1 failed');
  }

  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun('testMethod'));
    suite.add(new WasRun('testBrokenMethod'));
    suite.run(this.result);
    console.assert(this.result.summary() === '2 run, 1 failed');
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
console.log(result.summary());
