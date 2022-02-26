// class Button {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//
// 상속
// class input {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   inputName() {
//     console.log(`input name is ${this.name}`);
//   }
// }
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
// class Button extends input {
//   constructor(name: string) {
//     super(name);
//   }
// }
// const button = new Button("click me");
// button.inputName();
//
// 오버라이드
// 오버라이드(Override)란?
// 상위 클래스에서 정의한 메서드를 자식클래스에서 재정의 하는 것.
var Input = /** @class */ (function () {
    function Input(name) {
        this.name = name;
    }
    Input.prototype.inputName = function () {
        console.log("input name is ".concat(this.name));
    };
    return Input;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(name) {
        return _super.call(this, name) || this;
    }
    Button.prototype.inputName = function () {
        console.log("button name is ".concat(this.name));
    };
    return Button;
}(Input));
var button = new Button("click me");
button.inputName();
