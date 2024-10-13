// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const { LinkedList } = require('./linkedlist');

function fromLast(list, n) {
    let pointer = list.head;
    let nFarFromPointer = pointer;
    while (nFarFromPointer !== null) {
        nFarFromPointer = pointer;
        for (let i = 0; i < n + 2; i++) {
            nFarFromPointer = nFarFromPointer.next;
        }
        pointer = pointer.next;
    }
    return pointer;
}
const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
console.log(fromLast(list, 2).data);
module.exports = fromLast;
