const student = {
  name: "",
  specialty: "",
  //   grate: 0,
  //   missedClasses: 0,
  showParametrs: function (grate, missedClasses) {
    console.log("Name", this.name);
    console.log("Specialty", this.specialty);
    console.log("Grate", grate);
    console.log("Missed classes", missedClasses);
  },
};

const Anna = {
  name: "Anna",
  specialty: "math",
  //   grate: 4.5,
  //   missedClasses: 2,
};

const Olga = {
  name: "Olga",
  specialty: "physics",
  //   grate: 4.7,
  //   missedClasses: 3,
};

const Ivan = {
  name: "Ivan",
  specialty: "chemistry",
  //   grate: 4.9,
  //   missedClasses: 4,
};

student.showParametrs.bind(Anna, 4.5, 2)();
student.showParametrs.call(Olga, 4.7, 3);
student.showParametrs.apply(Ivan, [4.9, 4]);

// ***********************************************
const cart = {
  showItem() {
    console.log(`This is ${this.items}`);
  },
};

const htmlItem = {
  items: ["HTML"],
};

const csslItem = {
  items: ["CSS"],
};

document
  .querySelector("#html")
  .addEventListener("click", cart.showItem.bind(htmlItem));
document
  .querySelector("#css")
  .addEventListener("click", cart.showItem.bind(csslItem));

//   **********************************************************
const shop = {
  name: "",
  price: "",
  quanity: "",
  showShoping: function () {
    console.log(this.name, "costs", this.price * this.quanity);
  },
};

const Banana = {
  name: "banana",
  price: 30,
  quanity: 4.5,
};

const Cherry = {
  name: "cherry",
  price: 58,
  quanity: 1.3,
};

const Orange = {
  name: "orange",
  price: 89,
  quanity: 3.4,
};

shop.showShoping.bind(Banana)();
shop.showShoping.bind(Cherry)();
shop.showShoping.bind(Orange)();
