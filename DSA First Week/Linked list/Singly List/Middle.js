

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

    Node_Add(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
    }

    // ============= Middle value Finding ===============
    // Middle_Element() {
    //     if ( this.head == 0 ) {
    //         return null
    //     }
    //     let fast = this.head;
    //     let slow  = this.head;
    //     while (fast && fast.next) {
    //         fast = fast.next.next;
    //         slow = slow.next;
    //     }   
    //      return slow.value     
    // }

    // ========== Middle Value Deleteing ================
    Middle_Element() {
        if (this.head == null) {
            return null;
        }

        let fast = this.head;
        let slow = this.head;
        let prev = null; // To keep track of the node before slow

        while (fast && fast.next) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }

        const middleValue = slow.value; // Store the middle element's value

        if (prev) {
            prev.next = slow.next;  
        } else {
            this.head = slow.next;
        }

        return middleValue;  
    }


    Print_Function() {
        if (this.head === null) {
            console.log('Your Node is Empty ---->>  ');
        } else {
            let curr = this.head;
            let disValues = ''
            while (curr) {
                disValues = disValues + ` ${curr.value}`
                curr = curr.next;
            }
            console.log('Values ---->  ', disValues);
        }
    }
}

const list = new linkedList()
list.Node_Add(1)
list.Node_Add(2)
list.Node_Add(3)
list.Node_Add(4)
list.Node_Add(5)
list.Node_Add(6)
list.Node_Add(7)
list.Node_Add(8)

list.Print_Function();

const middleValue = list.Middle_Element();
console.log('Deleted middle element is ----->', middleValue);

list.Print_Function();