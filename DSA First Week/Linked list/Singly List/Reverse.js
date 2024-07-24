

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }

    add_node(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
    }

    reverse_node(value) {
        let previous = null;
        let curr = this.head
        while (curr) {
            let next = curr.next;
            curr.next = previous
            previous = curr
            curr = next
        }
        this.head = previous
    }

    print() {
        if (this.head === null) {
            console.log('Node is empty ---->> ');
        } else {
            let curr = this.head;
            let disValues = ''
            while (curr) {
                disValues = disValues + ` ${curr.value}`
                curr = curr.next
            }
            console.log('------->>  ', disValues);
        }
    }
}

const list = new linkedList()

list.add_node(10)
list.add_node(20)
list.add_node(30)
list.add_node(40)
list.add_node(50)
list.add_node(60)
list.add_node(70)

list.print()

list.reverse_node()
list.print()

// list.reverse_node()



