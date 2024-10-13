module.exports = class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }
};
// 2
// 4 2 1 5 1
// 42 4
