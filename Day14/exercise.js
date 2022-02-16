// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

// ===== Remove Vowels ==========================

// Cara pertama
// const removeVocal = (word = "") => {
//   // 1. Ubah word menjadi array supaya bisa ambil per character (huruf)
//   // 2. Check per huruf apakah huruf tsbt merupakan sebuah vowel
//   // 3. Jika huruf BUKAN sebuah vowel, concat ke string result

//   let strResult = "";
//   const wordArr = word.split(""); // return sebuah array

//   wordArr.forEach((character) => {
//     if (
//       !(
//         character === "a" ||
//         character === "i" ||
//         character === "u" ||
//         character === "e" ||
//         character === "o"
//       )
//     ) {
//       strResult += character;
//     }
//   });

//   return strResult;
// };

const removeVocal = (word = "") => {
  let strResult = "";
  const wordArr = word.split(""); // return sebuah array
  const vowelArr = ["a", "i", "u", "e", "o"];

  wordArr.forEach((character) => {
    if (!vowelArr.includes(character.toLowerCase())) {
      strResult += character;
    }
  });

  return strResult;
};

// const removeVocal = (word = "") => {
//   word = word.replace(/[aiueo]/gi, "");
//   // Regular Expression
//   return word;
// };

// console.log(removeVocal("javAscrIpt"));

// const kata = "javascript";
// const kataArr = kata.split("");

// console.log(kataArr);

// ===========================================

// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71

// ===== Alphabet Value ==========================
// 1. Pecah string menjadi array supaya bisa dapet per huruf (character)
// 2. Kita harus punya list abjad berurutan
// 3. Check value setiap huruf, cocokkan dengan posisi huruf tsbt di abjad
// 4. Tambahkan/jumlahkan value ke total

const alphabetValue = (word = "") => {
  const wordArr = word.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let totalValue = 0;

  wordArr.forEach((character) => {
    const characterValue = alphabet.indexOf(character) + 1;

    totalValue += characterValue;
  });

  return totalValue;
};

// console.log(alphabetValue("abcabc"));

// ===============================================

// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// Output: 4

// ===== Alphabet Odd Value ==========================

const alphabetOddValue = (word = "") => {
  const wordArr = word.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let totalValue = 0;

  wordArr.forEach((character) => {
    const characterValue = alphabet.indexOf(character) + 1;

    if (characterValue % 2 !== 0) {
      totalValue += characterValue;
    }
  });

  return totalValue;
};

console.log(alphabetOddValue("steve"));

// ===================================================

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah
// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [1, 3, 4, 5, 7, 0]
