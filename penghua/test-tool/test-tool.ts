class TestCase {
    constructor(public name: string) {
    }

    run() {
        // 取得 name 的值作為 method name 並執行
        this[this.name]();
    }
}

class WasRun extends TestCase {
    constructor(props) {
        super(props);
    }
    public wasRun = null;

    testMethod() {
        this.wasRun = true;
    }
}

export {
    WasRun
}