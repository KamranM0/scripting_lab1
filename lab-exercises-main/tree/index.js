// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(child) {
        const newNode = new Node(child);
        this.children.push(newNode);
    }

    remove(child) {
        this.children = this.children.filter((c) => c.data !== child);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(callback) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();

            if (node) {
                callback(node);
                queue.push(...node.children);
            }
        }
    }

    traverseDF(callback) {
        const traverse = (node) => {
            if (node) {
                callback(node);
                node.children.forEach((child) => traverse(child));
            }
        };

        traverse(this.root);
    }
}
const n = new Node('a');
n.add('b');
expect(n.children.length).toEqual(1);
expect(n.children[0].children).toEqual([]);
module.exports = { Tree, Node };
