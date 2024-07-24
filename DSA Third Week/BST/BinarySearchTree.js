
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root == null) this.root = newNode;
        else this.insertNode(this.root, newNode)
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left == null) root.left = newNode;
            else this.insertNode(root.left, newNode)
        } else {
            if (root.right == null) root.right = newNode;
            else this.insertNode(root.right, newNode)
        }
    }

    search(root, value) {
        if (!root) return false;
        else {
            if (root.value === value) return true
            else if (value < root.value) return this.search(root.left, value)
            else return this.search(root.right, value)
        }
    }


    // Traversing Depth First Search (DFS)
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }


    // Min & Max Value 
    min(root) {
        if (!root.left) return root.value;
        else return this.min(root.left)
    }
    max(root) {
        if (!root.right) return root.value;
        else return this.max(root.right)
    }

    // BFS 
    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }

    // Delete 
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root == null) return root;

        if (value < root.value) root.left = this.deleteNode(root.left, value)
        else if (value > root.value) root.right = this.deleteNode(root.right, value)
        else {
            if (!root.left && !root.right) return null;

            if (!root.left) return root.right;
            else if (!root.right) return root.left;

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }


    findClosestValue(target) {
        let closest = this.root.value;
        function findClosest(node) {
            if (!node) {
                return;
            }
            if (Math.abs(node.value - target) < Math.abs(closest - target)) {
                closest = node.value;
            }
            if (target < node.value) findClosest(node.left);
            else if (target > node.value) findClosest(node.right);
        };
        findClosest(this.root);
        return closest;
    }


} 

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(8)
bst.insert(11)
bst.insert(4)
bst.insert(21)
bst.insert(9)
bst.insert(7)
bst.levelOrder()

// console.log('-------Next-----');

// bst.delete(8)
// bst.levelOrder()

// console.log('the closeset value' ,bst.findClosestValue(12));


// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 11));
// console.log(bst.search(bst.root, 20));

console.log('Pre-Order Traversal:--->');
bst.preOrder(bst.root);

console.log('Post-Order Traversal:--->');
bst.postOrder(bst.root);

console.log('In-Order Traversal:--->');
bst.inOrder(bst.root);

// console.log(bst.max(bst.root));
// console.log(bst.min(bst.root));