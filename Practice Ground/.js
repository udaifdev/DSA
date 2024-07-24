
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode)
    }
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (!root.left) root.left = newNode;
            else this.insertNode(root.left, newNode)
        } else {
            if (!root.right) root.right = newNode;
            else this.insertNode(root.right, newNode)
        }
    }
    min(root) {
        if (!root.left) return root.value;
        else return this.min(root.left)
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) return root
        if (root.value > value) root.left = this.deleteNode(root.left, value)
        else if (root.value < value) root.right = this.deleteNode(root.right, value)
        else {
            if (!root.left && !root.right) return null;
            if (!root.left) return root.right;
            else if (!root.right) return root.left

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }


    levelofTree() {
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }
}


const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(8)
bst.insert(6)
bst.insert(9)
bst.insert(20)
bst.insert(11)
bst.insert(1)
bst.insert(13)
bst.levelofTree()
console.log('after the deleting --^');
bst.delete(10)
bst.levelofTree()

// console.log('search values are ---> ', bst.search(bst.root, 10));
// console.log('closest value --> ', bst.findClosesetValue(9.5));