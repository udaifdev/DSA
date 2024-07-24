
//array with 10 element - bubble sorting

//array with 1000 element - selection

//array with 1000 element and 990 items are sorted - merge sorting 

//linked list with 10 Node - insertion sort

//linked list with 1000 nodes - merge 


function quick(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[arr.length - 1]
    const left = []
    const right = [] 
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }   
    return [...quick(left), pivot, ...quick(right)]
}



let arr = [5, 3, 7, 2, 4, 1, 9, 8]
 console.log(quick(arr));


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor () {
        this.front = null;
        this.rear = null
    }

    enqueue(value) {
        const node = new Node(value)
        if (!this.rear) {
            this.front = this.rear = node
        } else {
            this.rear.next = node;
            this.rear = node
        }
    }

    dequeue() {
        if (this.front == null) {
            console.log('the front value is null');
            return
        }
        this.front = this.front.next;

        if (this.front == null) {
            this.rear = null
        }
    }

    print() {
        if (this.front == null) {
            console.log('the queue is empty --->');
        } else {
            let curr = this.front;
            let disValue = ''
            while (curr) {
                disValue += ` ${curr.value}`
                curr = curr.next
            }
            console.log('The values are ---> ', disValue);
        }
    }
}

const Que = new linkedList()
Que.enqueue(1)
Que.enqueue(2)
Que.enqueue(3)
Que.enqueue(4)
Que.enqueue(5)
Que.print()

Que.dequeue()
Que.print()

