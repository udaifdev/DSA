

// Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class linkedList {
    constructor() {
        this.head = null;
    }

    AddNode_last(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node
        }
    }

    AddNode_fist(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head
            this.head = node
        }
    }

    print_value() {
        if (this.head == null) {
            console.log('Node is Empty ----->> ');
        } else {
            let curr = this.head;
            let disValues = ''
            while (curr) {
                disValues = disValues + ` ${curr.value}`
                curr = curr.next
            }
            console.log('display -------->>  ', disValues);
        }
    }
}


const list = new linkedList()
list.AddNode_fist(5)
list.AddNode_fist(10)
list.AddNode_fist(15)
list.AddNode_fist(20)
list.AddNode_fist(25)
list.AddNode_fist(30)
list.print_value()


