//
//
// typescript interface
//
//
// using interface
// interface OrderSheet {
//   ingredient: string;
//   keyCount: number;
// }
// function createKeyboard(orderSheet: OrderSheet) {
//   console.log(`키보드 만드는중...`);
// }
// 확실히 가독성이 더 좋아진것을 볼 수 있습니다. 그리고 주문서의 항목란이 많아질 경우에도 문제가 없을것 같습니다.
//
//
// 선택적 프로퍼티
// 프로퍼티 이름의 끝에 ? 만 넣어주면 됩니다.
// interface OrderSheet {
//   ingredient: string;
//   keyCount: number;
//   name?: string;
// }
// function createKeyboard(orderSheet: OrderSheet) {
//   console.log("키보드 만드는중...");
// }
// let orderSheet1 = {
//   ingredient: "plastic",
//   keyCount: 40,
// };
// let orderSheet2 = {
//   ingredient: "metal",
//   keyCount: 30,
//   name: "heecheolman",
// };
// createKeyboard(orderSheet1);
// createKeyboard(orderSheet2);
// 선택적으로 이름을 넣어주었습니다.
//
//
// 읽기 전용 프로퍼티
// 주문을 했는데 고객이 각인될 내용을 바꾸고 싶다합니다. 주문이 들어가면 바꿀 수 없는 시스템이라 가저을 한다면 읽기전용으로 하고싶은 프로퍼티 앞에 readonly 만 붙여주면 됩니다.
// interface OrderSheet {
//   ingredient: string;
//   keyCount: number;
//   readonly name?: string;
// }
// function createKeyboard(orderSheet: OrderSheet) {
//   console.log("키보드 만드는중...");
//   // ...
// }
// readonly는 const 와 동일한 역할을 수행합니다. 변수일 경우에는 const를 사용하고 프로퍼티일 경우에는 readonly를 사용하면됩니다.
// let keyElements: ReadonlyArray<string> = ["a", "b", "c", "d"];
// let newkeyElements: string[];
// newkeyElements = keyElements as string[];
// newkeyElements.push("e");
// console.log(newkeyElements);
// type assertion을 이용하면 가능합니다.
//
//
// using function type
// 인터페이스의 프로퍼티로 함수 시그니쳐를 정의할 수 있다.
// mdn-signature 에 따르면 functions 그리고 methods의 입력과 출력을 정의합니다.
// 파라미터 타입들, 반환값과 타입, 콜백으로 반환되는 exceptions, oop 메서드의 접근 관한에 대한 정보(public, static, 프로토타입 키워드)
// interface TypingSpec {
//   (sound: string, weight: number): boolean;
// }
// const checkCreatedKeyboard: TypingSpec = (s: string, w: number): boolean => w < 10;
// console.log(checkCreatedKeyboard("took", 11));
// console.log(checkCreatedKeyboard("tok", 3));
// 함수 시그니쳐의 파라미터의 이름과 구현하는 부분의 파라미터 이름이 꼭 동일할 필요는 없습니다.
//
//
// nolmplicitAny: true
// 인덱스 시그니쳐의 의미는 키값은 문자이고 반환값도 문자이다
// interface IndexSignature {
//   [key: string]: string;
// }
// const obj: IndexSignature = {
//   a: "AA",
//   b: "bb",
// };
// Object.keys(obj).forEach((key) => console.log(obj[key]));
// 인덱스 시그니쳐 타입은 문자열 또는 숫자만 가능합니다.
//
// 유니온 타입을 이용
interface UnionTypeSignature {
  [key: string]: number | string;
  name: string;
  age: number;
}
const me: UnionTypeSignature = {
  name: "junhan",
  age: 34,
};

console.log(me.name);
console.log(me.age);
console.log(me["name"]);
console.log(me["age"]);
