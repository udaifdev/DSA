class Stack{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }
    push(val){
        this.q2.push(val);
        while(this.q1.length !== 0){
            this.q2.push(this.q1.shift())
        }
        this.q = this.q1;
        this.q1 = this.q2;
        this.q2 = this.q;
    }

    pop(){
        if(!this.q1.length) return false;
        this.q1.shift();
        return true
    }
    top(){
        if(!this.q1.length) return false;
        return this.q1[0];
    }
    print(){
        return this.q1;
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);
myStack.push(60);
myStack.pop()
console.log(myStack.print());