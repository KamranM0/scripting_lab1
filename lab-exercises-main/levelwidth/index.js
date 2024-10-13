// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');

function levelWidth(root) {
    const widthArray = [1];
    let levelArray = [...root.children];
    let pointerArray = [];
    while (levelArray.length > 0) {
        pointerArray = levelArray.map((el) => [...el.children]).flat(1);
        widthArray.push(levelArray.length);
        levelArray = [...pointerArray];

        pointerArray = [];
    }
    return widthArray;
    //1 2 3
}
const root = new Node(1);
const a = new Node(2);
const b = new Node(3);
const c = new Node(4);
const aa = new Node(5);
const ab = new Node(6);
const ca = new Node(7);
const cb = new Node(8);
root.children = [a, b, c];
a.children = [aa, ab];
c.children = [ca, cb];
levelWidth(root);
module.exports = levelWidth;
