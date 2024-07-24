

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

    // Lenght Checking Function
    get_length() {
        let length = 0
        let curr = this.head;
        while (curr) {
            length++;
            curr = curr.next
        }
        return length;
    }

    Deletetion_Index_Node(index) {
        if (index < 0 || index >= this.get_length()) {
            return null;
        }
        let dltNode;
        if (index === 0) {
            dltNode = this.head;
            this.head = this.head.next;
        } else {
            let previous = this.head;
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next
            }
            dltNode = previous.next;
            previous.next = dltNode.next
        }
        return dltNode.value
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
list.add_node(80)
list.add_node(50)
list.add_node(60)
list.add_node(70)

list.print()

console.log('Deleted Node Value:- ', list.Deletetion_Index_Node(4));
list.print();
