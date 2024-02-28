/**
 * Create and handle new
 * stack of books.
 * ✓ Every book must have its
 * Name, ISBN, Author and
 * Editorial
 * 
 * ✓ Fill the stack with some
 * examples of data
 * 
 */

class Book {
    constructor(name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class Stack {
    constructor() {
        this.books = [];
    }

    push(book) {
        this.books.push(book);
        return this.books;
    }

    pop() {
        return this.books.pop();
    }

    peek() {
        return this.books[this.books.length - 1];
    }

    size() {
        return this.books.length;
    }

    print() {
        console.log(this.books)
    }
}

// Crear algunos libros
const book1 = new Book("Libro 1", "ISBN1", "Autor 1", "Editorial 1");
const book2 = new Book("Libro 2", "ISBN2", "Autor 2", "Editorial 2");

const stack = new Stack();

console.log("---------- Inicio ----------");
console.log(stack.push(book1));
console.log("---------- Fin ----------");

console.log("---------- Inicio ----------");
console.log(stack.push(book2));
console.log("---------- Fin ----------");

console.log("---------- Inicio ----------");
console.log(stack.size());
console.log("---------- Fin ----------");

console.log("---------- Inicio ----------");
stack.print();
console.log("---------- Fin ----------");

console.log("---------- Inicio ----------");
console.log(stack.peek());
console.log("---------- Fin ----------");

console.log("---------- Inicio ----------");
console.log(stack.pop());
console.log("---------- Fin ----------");

console.log("---------- Inicio ----------");
stack.print();
console.log("---------- Fin ----------");

console.log("---------- Inicio ----------");
console.log(stack.size());
console.log("---------- Fin ----------");