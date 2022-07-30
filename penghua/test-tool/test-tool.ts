class TestCase {
    constructor(public name: string) {
    }

    run(): void {
        // 取得 name 的值作為 method name 並執行
        this[this.name]();
    }
}

class WasRun extends TestCase {
    public wasRun = null;

    constructor(props) {
        super(props);
    }

    testMethod(): void {
        this.wasRun = true;
    }
}

class TestCaseTest {
    static testRunning(): void {
       const test: WasRun = new WasRun("testMethod");
        console.assert(test.wasRun === null);
        test.run();
        console.assert(test.wasRun === true);
    }
}

TestCaseTest.testRunning();
export {
    WasRun
}