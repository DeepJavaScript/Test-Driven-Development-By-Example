class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {}
  tearDown() {}

  run() {
    this.setUp();
    this[this.name]();
    this.tearDown();
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

  tearDown() {
    this.wasRun = true;
    this.log = `${this.log}tearDown `;
  }
}

class TestCaseTest extends TestCase {
  constructor(name) {
    super(name);
  }

  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert(test.log === 'setUp testMethod tearDown ');
  }
}

new TestCaseTest('testTemplateMethod').run();
