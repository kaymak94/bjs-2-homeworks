"use strict";
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    }
    set state(stateArr) {
        this._state = stateArr;

        if (stateArr < 0) {
            this._state = 0;
        }

        if (stateArr > 100) {
            this._state = 100;
        }
    }
    get state() {
        return this._state;
    }
    fix() {
        return this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let findBook = null;
        this.books.forEach((book) => {
            if ((type = "name")) {
                if (book.name === value) {
                    findBook = book;
                }
            }
            if ((type = "pageCount")) {
                if (book.pagesCount === value) {
                    findBook = book;
                }
            }
            if ((type = "releaseDate")) {
                if (book.releaseDate === value) {
                    findBook = book;
                }
            }
            if ((type = "state")) {
                if (book.state === value) {
                    findBook = book;
                }
            }
            if ((type = "type")) {
                if (book.type === value) {
                    findBook = book;
                }
            }
            if ((type = "author")) {
                if (book.author === value) {
                    findBook = book;
                }
            }
        });
        return findBook;

    }

    giveBookByName(bookName) {
        const findBookArr = this.books.findIndex((book) => book.name === bookName);
        if (findBookArr === -1) {
            return null;

        }
        return this.books.splice(findBookArr, 1)[0];
    }

}

