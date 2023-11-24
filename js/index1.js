//**_1_**
let name;
let city;
name = "Іван";
city = name;
console.log(city);

//**_2_**
let name2 = "Olga";
console.log(`привіт ${1}`); //привіт 1
console.log(`привіт ${"name2"}`); //привіт name2
console.log(`привіт ${name2}`); //привіт Olga

//**_3_**
let a = "5";
let b = "13cvb";
let c = "12.9sxdcfgv";
console.log(parseInt(a));
console.log(typeof parseInt(a));
console.log(parseInt(b));
console.log(typeof parseInt(b));
console.log(parseFloat(c));
console.log(typeof parseFloat(c));

//**_4_**
console.log(0.1 + 0.2 == 0.3);
console.log((0.1 * 10 + 0.2 * 10) / 10 == 0.3);

//**\*5**
console.log(Math.max(20, 10, 50, 40));

//**\*6**
// Math.random() * (max - min)+min;
console.log(Math.random() * (4 - 2) + 2);

//**\*7**
console.log("Welcome to Bahamas!".length);

//**\*8**
const message = "Welcome to Bahamas!";
console.log(message.toUpperCase());

//**\*9**
let obj = {};
obj.name = "Ivan";
obj.age = 40;
obj.city = "Kyiv";
console.log(obj);
delete obj.city;
obj["like flowers"] = true;
console.log(obj);

//**\*10**
for (i in obj) {
  console.log(i);
  console.log(obj[i]);
}
