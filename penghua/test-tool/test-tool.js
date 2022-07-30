"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WasRun = void 0;
var TestCase = /** @class */ (function () {
    function TestCase(name) {
        this.name = name;
    }
    TestCase.prototype.run = function () {
        // 取得 name 的值作為 method name 並執行
        this[this.name]();
    };
    return TestCase;
}());
var WasRun = /** @class */ (function (_super) {
    __extends(WasRun, _super);
    function WasRun(props) {
        var _this = _super.call(this, props) || this;
        _this.wasRun = null;
        return _this;
    }
    WasRun.prototype.testMethod = function () {
        this.wasRun = true;
    };
    return WasRun;
}(TestCase));
exports.WasRun = WasRun;
var TestCaseTest = /** @class */ (function () {
    function TestCaseTest() {
    }
    TestCaseTest.testRunning = function () {
        console.log('test');
        var test = new WasRun("testMethod");
        console.assert(test.wasRun === null);
        test.run();
        console.assert(test.wasRun === true);
    };
    return TestCaseTest;
}());
TestCaseTest.testRunning();
