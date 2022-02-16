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
// Output: [4, 5, 0]

// ===== Unique Items ==========================
// 1. Check di arr1 apakah value-nya ada di arr2
//   a. Kalau ada, skip
//   b. Kalau tidak ada, masukkan ke array baru
// 2. Check di arr2 apakah value-nya ada di arr1
//   a. Kalau ada, skip
//   b. Kalau tidak ada, masukkan ke array baru

const uniqueItems = (arr1 = [], arr2 = []) => {
  const resultArr = [];

  arr1.forEach((val) => {
    if (!arr2.includes(val)) {
      resultArr.push(val);
    }
  });

  arr2.forEach((val) => {
    if (!arr1.includes(val)) {
      resultArr.push(val);
    }
  });

  return resultArr;
};

// console.log(uniqueItems([1, 3, 7, 4], [1, 5, 3, 7, 0]));

// =============================================

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah
// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [1, 3, 4, 5, 7, 0]

// ===== Remove Duplicate Items ==========================
// 1. Buat array kosong untuk menampung result
// 2. Push semua item dari arr1 ke dalam array result
// 3. Apakah value di arr2 sudah ada di array result?
//    a. Kalau ada, skip
//    b. Kalau tidak ada, push value-nya
const removeDuplicates = (arr1 = [], arr2 = []) => {
  const resultArr = [...arr1];

  arr2.forEach((val) => {
    if (!resultArr.includes(val)) {
      resultArr.push(val);
    }
  });

  return resultArr;

  // Cara keren (menggunakan Set)
  // return [...new Set([...arr1, ...arr2])];
};

console.log(removeDuplicates([1, 3, 7, 4], [1, 5, 3, 7, 0]));

// =======================================================
