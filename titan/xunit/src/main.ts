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
  private test!: WasRun;

  setUp() {
    this.test = new WasRun('testMethod');
  }

  testRunning() {
    this.test.run();
    console.assert(this.test.wasRun === true);
  }

  testSetUp() {
    this.test.run();
    console.assert(this.test.wasSetUp === true);
  }
}

new TestCaseTest('testRunning').run();
new TestCaseTest('testSetUp').run();
