class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
    this.qty = 0;
  }

  calculateTotalPrice = () => {
    return this.price * this.qty;
  };

  toString = () => {
    return "Product"
  }
}

class Book extends Product {
  constructor(productName, price, author, pages) {
    super(productName, price);
    this.author = author;
    this.pages = pages;
  }

  // Akan nimpa method toString milik Product
  toString = () => {
    return "Book"
  }
}

const bookHP = new Book("Harry Potter", 10000, "J. K. Rowling", 762)
bookHP.qty = 5
console.log(bookHP.toString());

class Shirt {
  constructor(size) {
    this.size = size;
  }
}
