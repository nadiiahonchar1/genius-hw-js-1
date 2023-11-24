let a;
a > 0 ? console.log(true) : console.log(false);

let b;
if (b === "test") {
  console.log(true);
}

let c;

c > 10 ? console.log(c - 5) : console.log(c + 5);

const month = prompt("Введіть число від 1 до 12");
switch (month) {
  case "1":
    console.log("January");
    break;
  case "2":
    console.log("February");
    break;
  case "3":
    console.log("March");
    break;
  case "4":
    console.log("April");
    break;
  case "5":
    console.log("May");
    break;
  case "6":
    console.log("June");
    break;
  case "7":
    console.log("July");
    break;
  case "8":
    console.log("August");
    break;
  case "9":
    console.log("September");
    break;
  case "10":
    console.log("October");
    break;
  case "11":
    console.log("November");
    break;
  case "12":
    console.log("December");
    break;
  default:
    console.log("Введіть число від 1 до 12");
}

const number = prompt("Введіть тризначне число");
const numberCopy = Number(number);
const firstNumber = Math.floor(numberCopy / 100);
const secondNumber = Math.floor((numberCopy - firstNumber * 100) / 10);
const thirdNumber = numberCopy - firstNumber * 100 - secondNumber * 10;
const sum = firstNumber + secondNumber + thirdNumber;
alert(`Сума чисел ${sum}`);
