class TestCase {
  constructor(public name: string) {}

  run() {
    this.setUp();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this[this.name]();

    this.tearDown();
    return new TestResult();
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
}

class TestResult {
  runCount = 1;

  summary() {
    return `${this.runCount} run, 0 failed`;
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
}

new TestCaseTest('testTemplateMethod').run();
new TestCaseTest('testResult').run();
