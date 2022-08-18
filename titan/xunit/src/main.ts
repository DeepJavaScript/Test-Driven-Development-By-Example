class TestCase {
  constructor(public name: string) {}

  run() {
    this.setUp();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this[this.name]();

    this.tearDown();
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

class TestCaseTest extends TestCase {
  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert(test.log === 'setUp testMethod tearDown ');
  }
}

new TestCaseTest('testTemplateMethod').run();
