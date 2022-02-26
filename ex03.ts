//
//
// typescript function
//
//
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(add(2, 4));
//
// const add = (num1: number, num2: number): number => num1 + num2;
//
//
// defaulf parameter 초기화 매개변수
// function add(num1: number = null, num2: number = null): number {
//   return num1 + num2;
// }
//
// optional parameter 선택적 매개변수
// function greet(lastName: string, firstName?: string): string {
//   let message = `my name is ${lastName}`;
//   if (firstName) {
//     message += firstName;
//   }
//   return message;
// }
// console.log(greet("hanjun", "kim"));
// console.log(greet("hanjun"));
// 선택적 매개변수는 오른쪽 정렬하여 등록해줘야 합니다.
//
//
// Union type
function numberOrString(data: number | string) {
  if (typeof data == "number") {
    //...
  } else if (typeof data == "string") {
    //...
  }
}
