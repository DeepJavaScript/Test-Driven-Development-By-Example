class TestCase {
  constructor(public name: string) {}

  run() {
    this.setUp();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this[this.name]();
  }

  setUp() {}
}

class WasRun extends TestCase {
  wasRun = false;
  wasSetUp = false;

  constructor(public name: string) {
    super(name);
  }

  testMethod() {
    this.wasRun = true;
  }

  setUp() {
    this.wasRun = false;
    this.wasSetUp = true;
  }
}

class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun('testMethod');

    console.assert(test.wasRun === false);
    test.run();
    console.assert(test.wasRun === true);
  }

  testSetUp() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert(test.wasSetUp === true);
  }
}

new TestCaseTest('testRunning').run();
new TestCaseTest('testSetUp').run();
