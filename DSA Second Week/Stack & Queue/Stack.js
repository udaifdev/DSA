
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.top = null
    }

    push(value) {
        const node = new Node(value)
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
    }

    pop() {
        if (!this.top) {
            console.log('Stack UnderFlow ------> ');
            return;
        }
        this.top = this.top.next;
    }

    print() {
        if (this.top == null) {
            console.log('the node is empty ------>');
        } else {
            let curr = this.top
            let disValue = ''
            while (curr) {
                disValue += ` ${curr.value}`
                curr = curr.next;
            }
            console.log('The Stack Values are ---> ', disValue);
        }
    }
}

const stack = new LinkedList()

// push
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()

// pop
stack.pop()
// stack.print()