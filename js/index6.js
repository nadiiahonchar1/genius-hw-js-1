class Abonent {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  set phoneNumber(newPhone) {
    this.phone = newPhone;
  }
  get info() {
    return `Ім'я: ${this.name}, Номер телефону: ${this.phone}`;
  }
}

const Anna = new Abonent("Anna", "+3809565858");
const Olga = new Abonent("Olga", "+3809254542");
const Ivan = new Abonent("Ivan", "+3809254844");
console.log(Anna);
console.log(Olga);
console.log(Ivan);
Anna.phoneNumber = "+3809254844";
console.log(Anna);
console.log(Anna.info);
