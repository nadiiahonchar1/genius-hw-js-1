function checkAge(age) {
  return age > 18 ? true : confirm("Батьки дозволили?");
}
checkAge(10);

function min(a, b) {
  return a < b ? a : b;
}
min(7, 12);

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Ви згодні?",
  () => {
    alert("Ви погодились.");
  },
  () => {
    alert("Ви скасували виконання.");
  }
);
