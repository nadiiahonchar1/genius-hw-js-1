# genius-hw-js-1

ДОМАШНЯ РОБОТА 1
//**_1_**
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка
повинна показати “Іван”).
//**_2_**
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?
//**_3_**
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип
//**_4_**
//Зробіть, щоб 0.1 + 0.2 = 0.3
//**\*5**
//Поверніть найбільше число с набору 20, 10, 50, 40
//**\*6**
//Поверніть випадкове число в діапазоні від 2 до 4
//**\*7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
//**\*8**
//вивести в консоль message великими літерами
//**\*9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
//**\*10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об\*єкта

---

ДОМАШНЯ РОБОТА 2
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test'
,
"qwerty"
, true
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

---

ДОМАШНЯ РОБОТА 3
// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

---

ДОМАШНЯ РОБОТА 4
---1---
Перепишіть функцію, використовуючи '?' або '||'
function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Батьки дозволили?');
}
}
---2---
Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
---3---
Перепишіть з використанням стрілкових функцій
Замініть Функціональні Вирази на стрілкові функції у коді нижче:
function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}
ask(
"Ви згодні?"
,
function() { alert("Ви погодились."); },
function() { alert("Ви скасували виконання."); }
);

---

ДОМАШНЯ РОБОТА 5
--1--

1. написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
   бал і кількість пропущених занять
2. написати метод який буде виводити цю інформацію
3. написати три варіанти студентів
4. прикріпити знначення за допомогою call apply bind
   --2--
   Написати дві кнопки і закріпити на них функції
   при натисканні на кнопку html - має видати коротке визначення що це таке
   при натисканні на кнопку css - має видати коротке визначення що це таке
   --3--
   Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
   функція має повертати назву товару і вартість
   перевірити на варіантах:

1) banana 30, 4,5
2) cherry 58, 1,3
3) jrange 89. 3,4

---

ДОМАШНЯ РОБОТА 6
Створити телефонну книгу:

- створити початковий клас Abonent, де зберігатимуться ім\*я і номер
- створити set який прийматиме телефон і номер
- створити get який виводитиме данні про абонента
- створити три різних юзери
- вивести данні

---

ДОМАШНЯ РОБОТА 7
Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
методами:
read() запитує два значення за допомогою prompt і запам’ятовує їх у
властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.

---

ДОМАШНЯ РОБОТА 8
Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
та прочитати його значення.

<!DOCTYPE html>
<html>
<body>
<div data-widget-name="menu">Виберіть жанр</div>
<script>/* ваш код */</script>
</body>
</html>

---

ДОМАШНЯ РОБОТА 9
-----1----
Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент

<div id="text"> зникав.
-----2----
Напишіть такий код, щоб після натискання на кнопку, вона зникала.
-----3----
Створіть дерево, яке показує/приховує дочірні вузли при кліці
