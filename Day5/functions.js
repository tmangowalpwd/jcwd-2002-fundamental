// ======= Pembuatan Function =======
// function displayMenu () {
//   console.log("Hello World!")
// }

// displayMenu()
// ==================================

// ======= Parameter Function =======
// function displayUsername (username = "Naruto") {
//   console.log(`Hello ${username}`)
// }

// displayUsername("Doraemon")

// function displayUsername (username = "Naruto", greeting = "Hello") {
//   console.log(`${greeting} ${username}`)
// }

// let username = "Doraemon"
// let greeting = "Good morning"

// displayUsername("", "Good morning")
let books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
let bookPrices = [10000, 7000, 12000, 15000];

let fruits = ["Leci", "Jeruk", "Apel", "Mangga"];
let fruitPrices = [12000, 3000, 7000, 10000];

function displayMenu(itemNames, itemPrices) {
  for (let i = 0; i < itemNames.length; i++) {
    console.log(
      `${i + 1}. ${itemNames[i]} || Rp. ${itemPrices[i].toLocaleString()}`
    );
  }
}

// console.log("===== Books =====")
// displayMenu(books, bookPrices)
// console.log("")

// console.log("===== Fruits =====")
// displayMenu(fruits, fruitPrices)

function sumTwoNumbers(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Gunakan tipe data yang benar";
  }

  if (isNaN(a) || isNaN(b)) {
    return "Pastikan number anda sesuai";
  }

  let hasil = a + b;

  return hasil;
  // if (hasil > 10) {
  //   return "Angka anda lebih dari 10";
  // }

  // return "Angka anda 10 atau lebih kecil";
}

// let result = sumTwoNumbers(7, 1);
// console.log(result);

// console.log(typeof(7))
// console.log("number")
// console.log(typeof NaN)

// ======= anonymous function ========
const a = function () {
  // ...
};

a();
// ============================

// ======= Arrow Function =========
// const b = (z, y) => {
//   return z + y
// }

// Langsung return
const b = (z, y) => z + y;

// console.log(b(3, 2))

const tambah = (first, second, callback) => {
  return callback(first, second);
};

const callback = (a, b) => {
  return a + b;
}

console.log(
  tambah(3, 5, callback)
);
