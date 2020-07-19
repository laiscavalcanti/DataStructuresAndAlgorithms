import Book from './oojs.js';

class ITbook extends Book { // we can inherit another class with its components
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn) // super references the class that was inherited
        this. technology = technology;
    }
    printTechnology() { // class's method
        console.log(this.technology)
    } 
    
}

let jsBook = new ITbook('Learning JS Algoritmes', '200', '1234567890', 'javascript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());