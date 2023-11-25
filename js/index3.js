const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

const arr = [];
for (let i = 0; i < fruts.length; i++) {
  arr.push(fruts[i].name);
}
console.log(arr);

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(`цифра ${j}!`);
  j++;
}

while (true) {
  let value = +prompt("Введіть число більше за 100");
  if (!value) {
    break;
  } else if (value > 100) {
    console.log("Вітаю, Ви ввели число більше 100!");
    break;
  } else {
    console.log("Введіть число більше за 100");
  }
}

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];
let ageGirl = 0;
for (let i of girls) {
  ageGirl = ageGirl + i.age;
}
ageGirl = ageGirl / girls.length;
console.log(`Середній вік дівчат ${ageGirl}`);
