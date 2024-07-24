
class Queue {
    constructor() {
        this.items = []
    }

    enQueue(num) {
        this.items.push(num)
    }

    deQueue() {
        return this.items.shift()
    }

    peek() {
        if (!this.items.length == 0) {
            return this.items[0]
        }
        return null;
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString());
    }
}

const Queues = new Queue()
Queues.enQueue(1)
Queues.enQueue(2)
Queues.enQueue(3)
Queues.enQueue(4)
Queues.enQueue(5)
Queues.print()

Queues.deQueue()
Queues.print()

console.log(Queues.peek());
console.log(Queues.size());