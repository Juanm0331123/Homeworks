/**
 * Create and handle your family tree until
 * your third pre-generation, think there is
 * only one person to make next
 * generation (mom or dad).
 * 
 * ✓ Every person must have a full name
 * and birthdate.
 * ✓ Every person could have more than
 * one child
 * ✓ Print your family tree in pre-order, post
 * order and in-order
 * 
 */

class Person {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.children = [];
    }

    addChildren(child) {
        this.children.push(child);
    }

    printPreOrder() {
        console.log(this.fullName);
        this.children.forEach(child => child.printPreOrder());
    }

    printInOrder() {
        if (this.children[0]) {
            this.children[0].printInOrder();
        }
        console.log(this.fullName);
        for (let i = 1; i < this.children.length; i++) {
            this.children[i].printInOrder();
        }
    }

    printPostOrder() {
        this.children.forEach(child => child.printPostOrder());
        console.log(this.fullName);
    }
}

// Crear personas
let person1 = new Person("Juan Miguel", "01-01-2000");
let person2 = new Person("Luisa Romero", "01-01-1980");
let person3 = new Person("Julian Miguel", "01-01-1960");

// Añadir hijos
person1.addChildren(person2);
person2.addChildren(person3);

// Imprimir el árbol genealógico
console.log("Pre-order");
person1.printPreOrder();
console.log('-------------------')
console.log("In-order");
person1.printInOrder();
console.log('-------------------')
console.log("Post-order");
person1.printPostOrder();
console.log('-------------------')