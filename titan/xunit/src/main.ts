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
  log = '';

  constructor(public name: string) {
    super(name);
  }

  testMethod() {
    this.wasRun = true;
    this.log += 'testMethod ';
  }

  setUp() {
    this.wasRun = false;
    this.wasSetUp = true;
    this.log = 'setUp ';
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
    console.assert(this.test.log === 'setUp testMethod ');
  }
}

new TestCaseTest('testRunning').run();
new TestCaseTest('testSetUp').run();
