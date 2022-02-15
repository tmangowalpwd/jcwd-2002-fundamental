
// 1. Sum of positives and negatives
// Input: sebuah array of numbers
// Output: sebuah array -> [ <sum_of_positives>, <sum_of_negatives> ]
// example input: [1, 3, -4, 2, -13, -7]
// example output: [6, -24]

const sumOfPositivesAndNegatives = (arr = []) => {
  let positives = 0
  let negatives = 0

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     positives += arr[i]
  //   } else if (arr[i] < 0) {
  //     negatives += arr[i]
  //   }
  // }

  arr.forEach((val) => {
    if (val > 0) {
      positives += val
    } else if (val < 0) {
      negatives += val
    }
  })

  return [ positives, negatives ]
}

// console.log(sumOfPositivesAndNegatives([1, 3, -4, 2, -13, -7]))

// 2. Square all
// Input: sebuah array of numbers
// Output: array of numbers yang sama, tapi sudah dipangkat 2
// example input: [1, 2, 3, 4, 5, 9]
// example output: [1, 4, 9, 16, 25, 81]

const squareAll = (arr = []) => {
  // let resultArr = []

  // arr.forEach((val) => {
  //   resultArr.push(val * val)
  // })

  // return resultArr

  let resultArr = arr.map((val) => {
    return val * val
  })

  return resultArr
}

// console.log(squareAll([1, 2, 3, 4, 5, 9]))

// 3. Plus Minus
// Input: sebuah array of numbers
// Output: 
// example input: [1, 2, 3, 4, 5, 9]
// example output: -6

const plusMinus = (arr = []) => {
  let result = 0
  let operator = "plus"

  arr.forEach((val) => {
    if (operator == "plus") {
      result += val
      operator = "minus"
    } else if (operator == "minus") {
      result -= val
      operator = "plus"
    }
  })

  return result
}

// console.log(plusMinus([1, 2, 3, 4, 5, 9]))

// 4. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

// console.log("javascript is the best".split(""))

const numbers = [1, 2, 3, 4, 5, 9]

console.log(numbers.join(""))

















































