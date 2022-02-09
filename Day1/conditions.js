// conditions
const benar = true;
const salah = false;

const password = "password1234"

if (password.length !== 11) {
  console.log("masuk")
}

// booleans
// true dan false -> false
// false dan false -> false
// true atau false -> true
// false atau false -> false

// dan -> &&
// atau -> ||

// jika password lebih dari 8 karakter -> "strong password!"
// jika password sama dengan 8 karakter -> "medium password!"
// jika password kurang dari 8 karakter -> "weak password!"
// if (password.length > 8) {
//   console.log("Strong password!")
// } else if (6 < password.length && password.length <= 8) {
//   console.log("Medium password!")
// } else {
//   console.log("Weak password!")
// }