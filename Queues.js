/**
 * Create and handle new
 * queue of people in one ATM.
 * 
 * ✓ Every person in the ATM
 * must have its name and
 * arrived time.
 * 
 * ✓ Fill the queue with some
 * examples of data
 * 
 */

class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        this.queue.forEach(person => {
            console.log(`Nombre: ${person.name}, Hora de llegada: ${person.arrivedTime}`);
        });
    }
}

// Crear una nueva cola
let atmQueue = new Queue();

// Llenar la cola con algunos datos de ejemplo
console.log("\nCola de personas en el ATM");
atmQueue.enqueue(new Person("Pedro", "9:55 AM"));
atmQueue.enqueue(new Person("Juan", "10:00 AM"));
atmQueue.enqueue(new Person("Ana", "10:05 AM"));
atmQueue.enqueue(new Person("Carlos", "10:10 AM"));
atmQueue.print();
console.log("\n");
console.log(atmQueue.dequeue());
console.log("\n");
console.log(atmQueue.peek());
console.log("\n");
console.log(atmQueue.size());
console.log("\n");
console.log(atmQueue.isEmpty());

