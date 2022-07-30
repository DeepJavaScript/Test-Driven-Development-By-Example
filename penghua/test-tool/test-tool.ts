class WasRun {
    public wasRun = null;
    constructor(public name: string) {
    }

    testMethod() {
        this.wasRun = true;
    }

    run() {
        // 取得 name 的值作為 method name 並執行
        this[this.name]();
    }
}

export {
    WasRun
}