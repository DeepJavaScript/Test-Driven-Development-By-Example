class TestCase {
    constructor(public name: string) {
    }

    // run  只會用到 name，作者認為是屬於父類別的職責
    run(): void {
        this.setUp();
        // 取得 name 的值作為 method name 並執行
        this[this.name]();
    }

    setUp(): void {
    }
}

class WasRun extends TestCase {
    public wasRun = null;
    public wasSetup = null;

    constructor(props) {
        super(props);
    }

    testMethod(): void {
        this.wasRun = true;
    }

    setUp(): void {
        this.wasRun = true;
        this.wasSetup = true;
    }
}

class TestCaseTest {
    static test: WasRun = null;

    static setUp(): void {
      this.test = new WasRun("testMethod");
    }

    static testRunning(): void {
        // const test: WasRun = new WasRun("testMethod");
        this.test.run();
        console.assert(this.test.wasRun === true);
    }

    static testSetUp(): void {
        // const test: WasRun = new WasRun("testMethod");
        this.test.run();
        console.assert(this.test.wasSetup === true);
    }
}

TestCaseTest.setUp();
TestCaseTest.testRunning();
TestCaseTest.testSetUp();
export {
    WasRun
}