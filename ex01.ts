//
//
// typescript class
//
//
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
//
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
// class Input {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   inputName() {
//     console.log(`input name is ${this.name}`);
//   }
// }
// class Button extends Input {
//   constructor(name: string) {
//     super(name);
//   }
//   inputName() {
//     console.log(`button name is ${this.name}`);
//   }
// }
// const button = new Button("click me");
// button.inputName();
//
//
//접근제어자
// public, protected, private 는 클래스기반 언어들에는 익숙합니다. 타입스크립트에서도 동일하게 이용가능합니다.
// public : 디폴트값, 어디에서나 접근가능.
// protected : 상속받은 하위클래스만 접근가능.
// private : 선언한 클래스 내에서만 접근가능.
//
//
//public
// default 값이 public 입니다. 별도로 프로퍼티나 메서드 앞에 추가해주지않아도 됩니다. 명시적으로 다음과 같이 수정할 수 있습니다.
// class Input {
//   public name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public inputName() {
//     console.log(`input name is ${this.name}`);
//   }
// }
// class Button extends Input {
//   public constructor(name: string) {
//     super(name);
//   }
//   public inputName() {
//     console.log(`button name is ${this.name}`);
//   }
// }
// const button = new Button("click me");
// button.inputName();
//
//
//protected
// // 선언한 클래스를 포함해 상속받는 하위클래스에서만 접근 가능합니다.
// class Input {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   protected inputName() {
//     console.log(`input name is ${this.name}`);
//   }
// }
// const input = new Input("input");
// input.inputName(); // Error!
// public 인 constructor() 를 통해 인스턴스를 생성했지만 protected 접근제어자가 붙은 inputName() 는 외부에서 호출불가능한것을 볼 수 있습니다.
// constructor() 에 protected가 붙는다면 해당 클래스는 바로 인스턴스화 될 수 없습니다. 상속받은 하위클래스에서 super 를 이용해 호출할 수 있습니다.
// class Input {
//   protected name: string;
//   protected constructor(name: string) {
//     this.name = name;
//   }
//   protected inputName() {
//     console.log(`input name is ${this.name}`);
//   }
// }
// class Button extends Input {
//   constructor(name: string) {
//     super(name);
//   }
//   inputName() {
//     console.log(`button name is ${this.name}`);
//   }
// }
// // const button: Input = new Input('button');  // Error!
// const button: Input = new Button("button");
//
//
// private
// 선언한 클래스 내에서만 접근이 가능합니다. 보통 private 키워드가 붙은 프로퍼티는 _(언더바) 를 붙이는것이 통상적이라고 합니다. 이후에 외부에서 접근을 할 시에는 get / set 을 이용합니다.
// class Input {
//   private _name: string;
//   protected constructor(name: string) {
//     this._name = name;
//   }
//   get name(): string {
//     return this._name;
//   }
//   set name(name: string) {
//     this._name = name;
//   }
// }
// class Button extends Input {
//   constructor(name: string) {
//     super(name);
//     // console.log(this._name);  Error!
//     // TS2341: Property '_name' is private and only accessible within class 'Input'.
//   }
// }
// const button = new Button("my Button");
// // get 호출
// console.log(`button name is ${button.name}`); // button name is my Button
// // set 호출
// button.name = "my Button2";
// // get 호출
// console.log(`button name is ${button.name}`); // button name is my Button2
//
//
// readonly
// 읽기전용 프로퍼티로 만듭니다. 프로퍼티 앞에 readonly 만 붙이면됩니다.
// class Person {
//   readonly name: string;
//   constructor(name: string) {
//       this.name = name;
//   }
// }
// const person = new Person('heecheolman');
// person.name = 'kimheecheol'; Error!
// TS2540: Cannot assign to 'name' because it is a read-only property.
// readonly 를 붙이면 constant(상수) 로 인식되며 생성자에서 한번 결정된 후에는 변경할 수 없습니다.
//
//
// 매개변수 프로퍼티
// 매개변수 프로퍼티(Parameter Property) 를 이용하여 선언과 할당을 동시에 할 수 있습니다.
// class Person {
//     constructor(readonly name: string) {}
//     greet() {
//         console.log(`my name is ${ this.name }`);
//     }
// }
// const person = new Person('heecheolman');
// person.greet(); // my name is heecheolman
// 개인적인 생각으로 이렇게 작성하면 코드 가독성이 떨어지는것 같다. 왜냐하면 괄호() 안에 넣어서 읽는데 모호해지기 때문이다. 장점을 생각해본다면 단순히 초기화를 위한 일회성 변수가 줄어든다는것?
