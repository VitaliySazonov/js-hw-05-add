// Створити класи Library та Book
// Клас Library буде описувати нашу бібліотеку книжок.
// Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// Метод <strong>buy</strong> - це метод що приймає аргументом
// обєкт книги і додає її в бібліотеку якщо її там ще немає.
// Якщо книга вже є показує повідомлення що книга вже куплена

// Метод <strong>sell</strong> - це метод що приймає аргументом
// назву книги і видаляє її з бібліотеки

// Метод <strong>addToFavourite</strong> - це метод що приймає
// аргументом назву книги і додає обєкт книги в список улюблених

// Метод <strong>removeFromFavourite</strong> - це метод що
// приймає назву книги і видаляє її з списку улюблених

// Гетер <strong>сountFavoriteBooks</strong> - це гетер що
// показує кількість книжок що додані в улюблені

// Гетер <strong>finishedBook</strong> - це гетер що містить
// колекцію всіх прочитаних книжок

// Метод <strong>totalCost</strong> - це метод що рахує
// вартість всіх книжок в бібліотеці

//////////////////////////////////////////////////////////////////////
// Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// <ul>
// <li>author</li>
// <li>title</li>
// <li>price</li>
// <li>totalPages</li>
// <li>currentPage</li>
// </ul>
// Також цей клас буде мати такі методи:

// Метод <strong>read</strong> - це метод що приймає кількість
// сторінок що було прочитано і міняє значення currentPage

// Гетер <strong>bookProgres</strong> - гетер що переводить
// кількість прочитаних сторінок в відсотки

// Сетер <strong>bookProgres</strong> - сетер що переводить
// відсоток прочитаних сторінок в кількість

// Клас Book приймає один аргумент - обєкт з парметрами книги. В
// середині класу використовувати деструктуризацію обєкта

// All books
class Library {
  constructor() {
    this.allBooks = [...arguments] ?? [];
    this.favorites = [];
  }

  buy(book) {
    if (!this.allBooks.includes(book)) {
      this.allBooks.push(book);
      console.log("Added to the Library", this.allBooks);
    }
  }

  sell(_title) {
    this.allBooks.splice(
      this.allBooks.findIndex((book) => book.title === _title),
      1
    );
    console.log("Deleted from the Library");
  }

  addToFavourite(_title) {
    let libraryBook = this.allBooks.find((elem) => elem.title === _title);
    let favoriteBook = this.favorites.find((elem) => elem.title === _title);
    if (libraryBook && !favoriteBook) {
      this.favorites.push(libraryBook);
      console.log(`${_title} -> Added to Favorites`);
    } else {
      console.log(`${_title} -> Exists in Favorites`);
    }
  }

  removeFromFavorite(_title) {
    let favoriteBook = this.favorites.find((elem) => elem.title === _title);
    if (favoriteBook) {
      console.log(
        `${favoriteBook.title} -> Found in Favorites`,
        this.favorites
      );
      this.favorites.splice(this.favorites.indexOf(favoriteBook), 1);
      console.log(`${_title} -> Deleted from Favorites`);
    } else {
      console.log(`${_title} -> doesnt exist in Favorites`);
    }
  }

  get countFavoriteBooks() {
    return console.log(`Total favorite books ->`, this.favorites.length);
  }

  get finishedBook() {
    let counter = 0;
    for (let item of this.allBooks) {
      if (item.totalPages <= item.currentPage) counter += 1;
    }
    return console.log(`Finished books ->`, counter);
  }

  totalCost() {
    let total = 0;
    for (let elem of this.allBooks) total += elem.price;
    return console.log(`Total cost of Library ->`, total);
  }
}

class Book {
  constructor({ author, title, price, totalPages, currentPage }) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.totalPages = totalPages;
    this.currentPage = currentPage ?? 0;
  }

  read(pages) {
    if (this.currentPage + pages <= this.totalPages)
      console.log(`Current read ->`, (this.currentPage += pages));
  }

  get bookProgress() {
    console.log(
      `GET Book Progress ->`,
      Math.floor((this.currentPage * 100) / this.totalPages) + "%",
      `(${this.currentPage} of ${this.totalPages})`
    );
  }

  set bookProgress(percent) {
    if (percent <= 100)
      this.currentPage = Math.floor((this.totalPages * percent) / 100);
    console.log(`SET bookProgress(pages) -> `, this.currentPage);
  }
}
let book = {
  author: "Arthur Conan Doyle",
  title: "Sherlock Holmes",
  price: 200,
  totalPages: 420,
  currentPage: 120,
};
let otherBook = {
  author: "Doyle",
  title: "Holmes",
  price: 300,
  totalPages: 360,
  currentPage: 420,
};
let testBook = {
  author: "Doyle",
  title: "Do this",
  price: 400,
  totalPages: 520,
  currentPage: 100,
};

let newOtherBook = new Book(otherBook);
let newBook = new Book(book);
newBook.bookProgress;
newBook.bookProgress = 65;
newBook.bookProgress;
newBook.read(100);

let newBookLib = new Library(book, otherBook);
console.log(newBookLib);
newBookLib.buy(testBook);
newBookLib.sell(testBook.title);
newBookLib.addToFavourite(book.title);
newBookLib.addToFavourite(newOtherBook.title);
newBookLib.addToFavourite(testBook.title);
newBookLib.removeFromFavorite(testBook.title);
newBookLib.removeFromFavorite(book.title);
newBookLib.countFavoriteBooks;
newBookLib.finishedBook;
newBookLib.totalCost();
