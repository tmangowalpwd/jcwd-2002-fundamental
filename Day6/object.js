const buku = {
  title: "Harry Potter",
  author: {
    name: "J. K. Rowling",
    age: 50,
    nationality: "Inggris",
  },
  pages: 658,
  yearReleased: "2001",
  alternativeTitles: ["Sang Penyihir", "The Wizard"],
  sequels: [
    {
      title: "Harry Potter 2",
      yearReleased: "2003",
    },
    {
      title: "Harry Potter 3",
      yearReleased: "2005",
    },
    {
      title: "Harry Potter 4",
      yearReleased: "2007",
    },
  ],
};

// Object destructuring
let { yearReleased, title, pages } = buku;
console.log(yearReleased);
console.log(title);
console.log(pages);

console.log(buku.title);

// console.log(buku.sequels[1].yearReleased)
// buku.publisher = "Purwadhika"

// Hapus property
// buku.judul = buku.title
// delete buku.title
// console.log(buku)

// dot notation
// console.log(buku.title)
// console.log(buku.author.age)
// console.log(buku.author.name)
// console.log(buku.alternativeTitles[0])

// bracket notation
// const title = "pages"
// console.log(buku["title"])
// console.log(buku[title])

// const products = ["Leci", "Mangga", "Apel"]
// const productsObj = {
//   0: "Leci",
//   1: "Mangga",
//   2: "Apel"
// }

// productsObj[2]

// console.log("Nama: Leci || Harga: Rp. 2000,00")

const products = [
  {
    productName: "Leci",
    price: 2000,
    qty: 5,
  },
  {
    productName: "Mangga",
    price: 7000,
    qty: 0,
  },
  {
    productName: "Apel",
    price: 5000,
    qty: 2,
  },
];

const userInputNewProduct = "Jeruk";
const userInputNewPrice = 7000;

const newData = {
  productName: userInputNewProduct,
  price: userInputNewPrice,
  qty: 0,
};

products.push(newData);

// for (let i = 0; i < products.length; i++) {
//   const product = products[i];

//   if (product.qty == 0) {
//     continue;
//   }

//   console.log(
//     `${i + 1}. ${product.productName} x ${product.qty} || ${
//       product.qty * product.price
//     }`
//   );
// }

// const cars = [
//   {
//     brand: "Toyota",
//     year: "2010",
//     colors: ["Red", "Black"],
//   },
//   {
//     brand: "Honda",
//     year: "2007",
//     colors: ["Gray", "Black", "White"],
//   },
// ];

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i]
//   let row = `${i+1}. Brand: ${car.brand} || Year: ${car.year} || Colors: `

//   // Looping colors
//   for (let j = 0; j < cars[i].colors.length; j++) {
//     row += `${car.colors[j]} `
//   }

//   console.log(row)
// }
