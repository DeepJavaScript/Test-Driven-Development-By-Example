class TestCase {
  constructor(name) {
    this.name = name;
    this.suite = new TestSuite();
  }

  setUp() {}
  tearDown() {}

  run(result) {
    result.testStarted();
    try {
      this.setUp();
      this[this.name]();
    } catch (e) {
      result.testFailed();
    }
    this.tearDown();
    return result;
  }

  runTestSuite(result) {
    const TargetTestCase = this.constructor;
    Object.getOwnPropertyNames(TargetTestCase.prototype)
      .filter(propertyName => {
        return (
          !['constructor', 'setUp'].includes(propertyName) &&
          typeof TargetTestCase.prototype[propertyName] === 'function'
        )
      })
      .map(propertyName => new TargetTestCase(propertyName))
      .forEach(method => this.suite.add(method));

    this.suite.run(result);
  }
}

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasRun = null;
    this.wasWetUp = null;
    this.log = '';
  }

  setUp() {
    this.wasRun = null;
    this.wasWetUp = true;
    this.log = 'setUp ';
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
    console.assert(test.log === 'setUp testMethod tearDown ', 'testTemplateMethod');
  }

  testTearDownAfterFailedResult() {
    const test = new WasRun('testBrokenMethod');
    test.run(this.result);
    console.assert(test.log === 'setUp tearDown ', 'testTearDownAfterFailedResult');
  }

  testResult() {
    const test = new WasRun('testMethod');
    test.run(this.result);
    console.assert('1 run, 0 failed' === this.result.summary, 'testResult');
  }

  testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    test.run(this.result);
    console.assert('1 run, 1 failed' === this.result.summary, 'testFailedResult');
  }

  testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();
    console.assert('1 run, 11å failed' === this.result.summary, 'testFailedResultFormatting');
  }

  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun('testMethod'));
    suite.add(new WasRun('testBrokenMethod'));
    suite.run(this.result);
    console.assert('2 run, 1 failed' === this.result.summary, 'testSuite');
  }
}

console.log('====TestCaseTest====');
const suite = new TestSuite();
suite.add(new TestCaseTest('testTemplateMethod'));
suite.add(new TestCaseTest('testTearDownAfterFailedResult'));
suite.add(new TestCaseTest('testResult'));
suite.add(new TestCaseTest('testFailedResult'));
suite.add(new TestCaseTest('testFailedResultFormatting'));
suite.add(new TestCaseTest('testSuite'));
const result = new TestResult();
suite.run(result);
console.log(result.summary);


console.log('====TestSetUpFailedTest====');

class TestSetUpFailedTest extends TestCase {
  constructor(name) {
    super(name);
    this.result = null;
  }

  setUp() {
    throw 'error';
  }

  testTemplateMethod() {
    const test = new WasRun('testMethod', 'testTemplateMethod');
    test.run(this.result);
  }

  testTearDownAfterFailedResult() {
    const test = new WasRun('testBrokenMethod');
    test.run(this.result);
    console.assert(test.log === 'setUp tearDown ', 'testTearDownAfterFailedResult');
  }
}

const setUpFailedTestSuite = new TestSuite();
setUpFailedTestSuite.add(new TestSetUpFailedTest('testTemplateMethod'));
setUpFailedTestSuite.add(new TestSetUpFailedTest('testTearDownAfterFailedResult'));
const testSetUpFailedResult = new TestResult();
setUpFailedTestSuite.run(testSetUpFailedResult);
console.log(testSetUpFailedResult.summary);

const testSetUpFailedResultBySuite = new TestResult();
new TestSetUpFailedTest().runTestSuite(testSetUpFailedResultBySuite);
console.log(testSetUpFailedResultBySuite.summary);
