// var -> bisa redefine dan redeclare
// let -> bisa redefine tapi tidak bisa redeclare
// const -> tidak bisa redefine dan tidak bisa redeclare

// console.log(nama);

// let nama = "mark";
// const nama = "steve";
// console.log(nama);

// console.log(sumValues());

// const sumValues = () => {
//   return 2;
// };

let nama = "bill";
let angka = 21;
let benar = true;
let kosong = null;
let tidakAda;
let orang = {
  nama: "steve",
};
let arr = [];

function sumValues() {
  return 2;
}

let angkaString = "steve";
// console.log(angka.toString());
// console.log(typeof Number(angkaString).toString());
// NaN -> Not a Number

// let inputName = "naruto";
// let age;

// if (inputName == true) {
//   console.log("Terima kasih sudah input nama");
// }

// console.log(Boolean(inputName) == true);

// Types of loop
// 1. For
// 2. Do while
// 3. While

const lessons = [
  "Matematika",
  "IPA",
  "B Indo",
  "Sejarah",
  "Geografi",
  "Ekonomi",
];

for (let i = 0; i < lessons.length; i++) {
  // console.log(lessons[i]);
  lessons.splice(i, 1);
}
// console.log(lessons);

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log("masuk");
// } while (i > 5);

const person = {
  fullName: "steve zuckerberg",
  age: 23,
  phoneNumbers: [
    {
      number: "08765432",
      callNumber: () => {
        return {
          success: true,
          message: "Halo aku berdering",
        };
      },
    },
  ],
};

const namaLengkap = "fullName";
// person.fullName = "naruto gates";
// person.age = 53;
person.birthday = "04-02-1956";

// console.log(person.phoneNumbers[0].callNumber().message);

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  sayHello = () => {
    return "Hello my name is, " + this.name;
  };
}

class Employee extends Person {
  constructor(name, age, occupation, department) {
    super(name, age, occupation);
    this.department = department;
  }
}

const steve = new Person("Steve", 23, "Software Engineer");
const employeeMark = new Employee("Mark", 18, "Designer", "Product");

// console.log(employeeMark.sayHello());

// console.log("2" == 2);

console.log(0.1 + 0.2 === 0.3);
