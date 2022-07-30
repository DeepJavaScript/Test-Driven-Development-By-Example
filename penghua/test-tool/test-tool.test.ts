import { WasRun } from "./test-tool";

describe("proto-test", () => {
    test("測試方法執行前 wasRun 為 false, 執行後 wasRun 為 true", () => {
        const test = new WasRun('testMethod');
        expect(test.wasRun).toBeFalsy();
        test.run();
        expect(test.wasRun).toBeTruthy();
    })
})

