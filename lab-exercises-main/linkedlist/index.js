// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, n = null) {
        this.data = data;
        this.n = n;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        const firstNode = new Node(data);
        if (!this.head) {
            this.head = firstNode;
        } else {
            const temp = this.head;
            this.head = firstNode;
            this.head.next = temp;
        }
    }
    size() {
        let pointer = this.head;
        let length = 0;
        while (pointer) {
            length++;
            pointer = pointer.next;
        }
        return length;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let pointer = this.head;
        if (!pointer) return null;
        while (pointer.next) {
            pointer = pointer.next;
        }
        return pointer;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let pointer = this.head;
        while (pointer.next && pointer.next.next) {
            pointer = pointer.next;
        }
        pointer.next = null;
    }
    insertLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let pointer = this.head;
        while (pointer.next) {
            pointer = pointer.next;
        }
        pointer.next = newNode;
    }
    getAt(ind) {
        let pointer = this.head;
        for (let i = 0; i < this.size(); i++) {
            if (i === ind) {
                return pointer;
            }
            pointer = pointer.next;
        }
    }
    removeAt(ind) {
        let prevPointer = null;
        let curPointer = this.head;
        let nextPointer = this.head.next;
        for (let i = 0; i < this.size(); i++) {
            if (i === ind) {
                curPointer = null;
                prevPointer.next = nextPointer;
                return;
            }
            prevPointer = curPointer;
            curPointer = nextPointer;
            nextPointer = nextPointer.next;
        }
    }
    insertAt(data, ind) {
        let pointer = this.getAt(ind);
        const newNode = new Node(data, pointer);
        let prevPointer = this.getAt(ind - 1);
        prevPointer.next = newNode;
    }
    forEach(callback) {
        let pointer = this.head;
        let index = 0;
        while (pointer) {
            callback(pointer, index);
            pointer = pointer.next;
            index++;
        }
    }
    [Symbol.iterator]() {
        let pointer = this.head;
        return {
            next() {
                if (pointer) {
                    const value = pointer.data;
                    pointer = pointer.next;
                    return { value, done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }
}

module.exports = { Node, LinkedList };
