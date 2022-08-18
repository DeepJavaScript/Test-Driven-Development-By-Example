class TestCase {
  constructor(public name: string) {}

  run() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this[this.name]();
  }
}

class WasRun extends TestCase {
  wasRun = false;

  constructor(public name: string) {
    super(name);
  }

  testMethod() {
    this.wasRun = true;
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
