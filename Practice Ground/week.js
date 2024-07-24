

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class binarySearchTree {
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

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

}

const bst = new binarySearchTree()
bst.insert(20)
bst.insert(15)
bst.insert(25)
bst.insert(16)
bst.insert(14)
bst.insert(30)
bst.insert(24)
bst.insert(15)
bst.insert(12)
bst.insert(22)
bst.insert(28)

console.log('The inOrder List --> ');
bst.inOrder(bst.root)
