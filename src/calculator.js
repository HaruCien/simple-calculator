export function add(a, b) {
  return a + b;
}
 
export function subtract(a, b) {
  return a - b;
}
 
export function calculate(operator, a, b) {
  const ops = { add, subtract, multiply };
  const fn = ops[operator];
  if (!fn) {
    throw new Error(`알 수 없는 연산자: ${operator}`);
  }
  return fn(a, b);
}
export function multiply(a, b) {
  return a * b;
}
 
// calculate 함수의 ops에도 등록
const ops = { add, subtract, multiply };
