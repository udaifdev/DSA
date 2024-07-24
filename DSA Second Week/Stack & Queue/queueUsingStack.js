// Queue using two stacks

class Queue {
    constructor(){
        this.pushStack = [];
        this.popStack = [];
    }
    push(val) {
        this.pushStack.push(val)
        return true
    }
    pop() {
        if(!this.popStack.length){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack.pop()
    }
    peek() {
        if(!this.popStack.length){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack[this.popStack.length-1]
    }

    print() {
        return [this.pushStack, this.popStack]
    }
}
const myQueue = new Queue();
myQueue.push(10);
myQueue.push(20);
myQueue.push(30);
myQueue.push(40);
myQueue.push(50);
myQueue.push(60);
myQueue.push(70);
console.log(myQueue.pop());
console.log(myQueue.peek());

// console.log(myQueue.print());