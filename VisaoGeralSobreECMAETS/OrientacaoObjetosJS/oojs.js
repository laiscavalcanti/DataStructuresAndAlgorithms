class Book { // class declaration
    constructor(title, pages, isbn){ // constructor is a function where attributes are declared
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    }
    
    printIsbn(){ //class's method
        console.log(this.isbn);
    }
}

let book = new Book('javascript', '502', '123456789');
console.log(book.title);// shows the book title

book.title = 'ninja javascript';// updates the book title value
console.log(book.title);// shows the book title