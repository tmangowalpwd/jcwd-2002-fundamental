// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// console.log("*")
// console.log("* *")
// console.log("* * *")
// console.log("* * * *")
// console.log("* * * * *")
// console.log("* * * * * *")
// console.log("* * * * * * *")
// console.log("* * * * * * * *")

// let maxNumber = 20

// ====== FOR LOOP ======
// for (let i = 0; i <= maxNumber; i++) {
//   // hanya untuk bilangan genap
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }
// ========================

// ====== WHILE LOOP ======
// declare iterator
// let i = 20
// while (i < maxNumber) {
//   console.log(i)

//   // increment iterator
//   i++
// }
// ========================

// ====== DO WHILE LOOP ======
// let i = 1
// do {
//   console.log(i)
//   i++
// } while (i < maxNumber)
// ===========================

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(j)
  }

  console.log("------------------")
}