

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

    search_Value(value) {
        if (this.head == null ) {
            return -1
        }
        let i=0
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return i;
            }
            curr = curr.next
            i++;
        }
        return -1
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

console.log('searching values of index -->>  ', list.search_Value(900));


