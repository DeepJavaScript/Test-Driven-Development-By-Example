
describe("proto-test", () => {
    test("測試方法執行前 wasRun 為 false, 執行後 wasRun 為 true", () => {
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

        const test = new WasRun('testMethod');
        expect(test.wasRun).toBeFalsy();
        test.run();
        expect(test.wasRun).toBeTruthy();
    })
})

