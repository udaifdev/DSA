

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

    remove_Given_value(value) {
        if (!this.head) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return null;
        } else {
            let previous = this.head;
            while (previous.next && previous.next.value !== value) {
                previous = previous.next;
            }
            if (previous.next) {
               let removeNode = previous.next;
                previous.next = removeNode.next
                return value;
            }
            return null
        }
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
list.add_node(900)
list.add_node(60)
list.add_node(70)

list.print()

console.log('Deleted Given Node Value:- ', list.remove_Given_value(900));
list.print();
