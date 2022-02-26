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
class Input {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  inputName() {
    console.log(`input name is ${this.name}`);
  }
}
class Button extends Input {
  constructor(name: string) {
    super(name);
  }
  inputName() {
    console.log(`button name is ${this.name}`);
  }
}
const button = new Button("click me");
button.inputName();
