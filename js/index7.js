class Calculator {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
  read() {
    this.firstNumber = +prompt("Введіть перше значення:", 0);
    this.secondNumber = +prompt("Введіть друге значення:", 0);
  }
  sum() {
    return this.firstNumber + this.secondNumber;
  }
  mul() {
    return this.firstNumber * this.secondNumber;
  }
}
const calculator = new Calculator();
calculator.read();

console.log("sum=", calculator.sum());
console.log("mul=", calculator.mul());
