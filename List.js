/**
 * Node: Every element in the list.
 * Head: The head of the list
 * Body: The body of the list
 */

/**
 * LINKEDLIST METHODS
 * append: adds a new node to the list
 * peek: returns some node entered on the list
 * size: returns the number of elements in the list
 * remove: removes a node from the list
 * print: prints the contents of the list
 */

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        const newNode = new Node(node)

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    peek(value, current = this.head) {
        if (this.head === null) {
            return false;
        }
        if (current !== null) {
            if (current.value === value) {
                return true;
            } else {
                return this.peek(value, current.next);
            }
        }
    }
    size(current = this.head, acum = 1) {
        if (this.head === null) {
            return 0;
        }
        if (current.next !== null) {
            return this.size(current.next, acum + 1);
        }

        return acum;
    }

    remove(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (this.head.value === value) {
            return this.head = this.head.next;
        }
        if (current.next === null) {
            return false;
        }
    }

}