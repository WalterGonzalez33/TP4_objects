"use strict";

class Book {
  #title;
  #author;
  #isbn;
  #pagNumbers;

  constructor(
    title = "N/D",
    author = "N/D",
    isbn = "000-00-0000-000-0",
    pagNumbers = 0
  ) {
    this.#verifyTitle(title);
    this.#verifyAuthor(author);
    this.#verifyIsbn(isbn);
    this.#verifyPagNumbers(pagNumbers);

    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.#pagNumbers = pagNumbers;
  }

  // métodos privados de verificación
  #verifyTitle(title) {
    if (typeof title != "string") {
      throw new Error(`el titulo tiene que ser texto`);
    }
    if (title.length > 50) {
      throw new Error(`el titulo del libro no puede superar los 50 caracteres`);
    }
    return true;
  }

  #verifyAuthor(author) {
    if (typeof author != "string") {
      throw new Error(`el nombre del autor tiene que ser texto`);
    }
    if (author.length > 40) {
      throw new Error(`el nombre del autor no puede superar los 40 caracteres`);
    }

    return true;
  }

  #verifyIsbn(isbn) {
    const alphabetRegex = /[a-zA-Z]/.test(isbn);
    const symbolsRegex = /[^a-zA-Z0-9-]/.test(isbn);

    if (typeof isbn != "string") {
      throw new Error(`el ISBN del libro tiene que ser texto`);
    }
    if (isbn.length > 17) {
      throw new Error(`el ISBN del libro no puede superar los 17 caracteres`);
    }
    if (isbn.length < 13) {
      throw new Error(
        `el ISBN del libro no puede tener menos de 13 caracteres`
      );
    }
    if (alphabetRegex || symbolsRegex) {
      throw new Error(
        `el ISBN del libro no puede contener símbolos o letras (el guión medio esta permitido '-')`
      );
    }
    return true;
  }

  #verifyPagNumbers(pagNumbers) {
    if (typeof pagNumbers != "number") {
      throw new Error(
        `el formato de la cantidad de paginas del libro tiene que ser un enteros`
      );
    }

    if (pagNumbers >= 999999) {
      throw new Error(`numero de paginas excedido`);
    }

    if (pagNumbers <= 0) {
      throw new Error(`el numero de paginas no puede ser 0 o menos`);
    }
    return true;
  }

  // getters

  get title() {
    return this.#title;
  }
  get author() {
    return this.#author;
  }
  get isbn() {
    return this.#isbn;
  }
  get pagNumbers() {
    return this.#pagNumbers;
  }
  get data() {
    return {
      title: this.#title,
      author: this.#author,
      isbn: this.#isbn,
      pagNumbers: this.#pagNumbers,
    };
  }
  // setters

  set title(newTitle) {
    if (this.#verifyTitle(newTitle)) {
      this.#title = newTitle;
    }
  }
  set author(newAuthor) {
    if (this.#verifyAuthor(newAuthor)) {
      this.#author = newAuthor;
    }
  }

  set isbn(newIsbn) {
    if (this.#verifyIsbn(newIsbn)) {
      this.#isbn = newIsbn;
    }
  }

  set pagNumbers(newPagNumbers) {
    if (this.#verifyPagNumbers(newPagNumbers)) {
      this.#pagNumbers = newPagNumbers;
    }
  }

  // métodos públicos
  getInfo() {
    return `El libro ${this.#title} con ISBN ${
      this.#isbn
    } creado por el autor ${this.#author} tiene ${this.#pagNumbers} páginas`;
  }
}
const bookMorePages = (books) => {
  let bookWithMorePages = books.reduce((acc, book) => {
    if (book.pagNumbers > acc.pagNumbers) {
      acc = book;
    }
    return acc;
  }, books[0]);

  return bookWithMorePages;
};

const showBooks = (books) => {
  books.forEach((book) => {
    document.write(book.getInfo(), `<br>`);
  });

  return true;
};
const books = [
  new Book("El Lazarillo de Tormes", "Anónimo", "978-15-8977-002-7", 140),
  new Book("Distancia De Rescate", "Samanta Schweblin", "09789877690934", 128),
];

const bookWithMorePages = bookMorePages(books);

showBooks(books);
document.write(
  `el libro con mas paginas es ${bookWithMorePages.title} con ${bookWithMorePages.pagNumbers} paginas`
);
