const product = {
  productName: "LOTR",
  price: 10000,
  quantity: 0,
}

const newProduct = {
  ...product,
  productName: "Harry Potter",
}

const { productName: hargaProduk, quantity, price } = product;

// console.log(hargaProduk)

const numbers = [1, 2, 3, 4]

const [a, b] = numbers

console.log(b)

const newNumbers = [ ...numbers ]

product.price = 99999

// console.log(newNumbers)

let x = 5

x = 3

x = 7

// console.log(x)