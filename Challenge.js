/**
 * Challenge
 * 
 * Create and handle new list of TODOs.
 * Every task must have its title, desciption, and description,
 * and points to next TODOs
 * Fill the list with some data and print all TODOs
 * 
 */

class Todo {
    constructor(title, description, points = 0) {
        this.title = title;
        this.description = description;
        this.points = points;
        this.next = null;
    }
}

class TodoList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(title, description, points = 0) {
        const newTodo = new Todo(title, description, points);
        if (!this.head) {
            this.head = newTodo;
        } else {
            this.tail.next = newTodo;
        }
        this.tail = newTodo;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(`Title: ${current.title}`);
            console.log(`Description: ${current.description}`);
            console.log(`Points: ${current.points}`);
            console.log("-----------------------");
            current = current.next;
        }
    }
}

// Creating a new TodoList
const todoList = new TodoList();

// Adding some tasks
todoList.add("Task 1", "Description for task 1", 5);
todoList.add("Task 2", "Description for task 2", 10);
todoList.add("Task 3", "Description for task 3", 7);

// Printing all todos
todoList.print();
