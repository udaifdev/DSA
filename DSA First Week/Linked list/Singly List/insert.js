

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

    inser_value(value, index) {
        if (index < 0) {
            return;
        }
        const node = new Node(value)

        if (index === 0) {
            node.next = this.head;
            this.head = node;
            return;
        } else {
            let curr = this.head;

            let length = 0;
            while (curr) {  // Calculate the length of the linked list
                length++;
                curr = curr.next;
            }
            console.log('size -->  ', length);
            // If index is greater than or equal to length, add at the end
            if (index >= length) {
                this.AddNode_last(value)
                return
            }

            // Reset curr to head to start insertion
            curr = this.head;

            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
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
//  list.AddNode_last(1)
//  list.AddNode_last(2)
//  list.AddNode_last(3)
//  list.AddNode_last(4)
//  list.AddNode_last(5)
//  list.AddNode_last(7)
//  list.AddNode_last(8)

//  list.inser_value(6,5)
//  list.inser_value(9,11)

list.print_value()



list.inser_value(30, 0)
list.print_value()

list.inser_value(10, 0)
list.print_value()

list.inser_value(20, 1)
list.print_value()