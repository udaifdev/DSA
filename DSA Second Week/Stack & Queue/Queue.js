

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.front = null;
        this.rear = null
    }

    enqueue(value) {
        const node = new Node(value)
        if (!this.rear) {
            this.front = this.rear = node;
        }
        this.rear.next = node;
        this.rear = node
    }

    dequeue() {
        if (!this.front) {
            console.log('the Empty -------->');
        }
        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null
        }
    }

    print() {
        if (this.front == null) {
            console.log('The Empty ----->');
        } else {
            let curr = this.front;
            let disValue = ''
            while (curr) {
                disValue += ` ${curr.value}`
                curr = curr.next
            }
            console.log('The Queue Values are --->  ', disValue);
        }
    }
}

const Queue = new LinkedList()

Queue.enqueue(1)
Queue.enqueue(2)
Queue.enqueue(3)
Queue.enqueue(4)
Queue.enqueue(5)
Queue.print()

Queue.dequeue()
// Queue.print()