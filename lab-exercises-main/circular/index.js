// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const { LinkedList, Node } = require('./linkedlist');

function circular(list) {
    let pointer = list.head;
    let cacheDataArray = [];
    while (pointer) {
        if (cacheDataArray.includes(pointer)) {
            return true;
        }
        cacheDataArray.push(pointer);
        pointer = pointer.next;
    }
    return false;
}
const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
module.exports = circular;
