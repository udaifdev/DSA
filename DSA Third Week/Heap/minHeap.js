
// =========================== min Heap ===========================

class minHeap {
    constructor() {
        this.heap = [];
    }
    parent(i) {
        return Math.floor(((i - 1) / 2));
    }
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    add(val) {
        this.heap.push(val);
        this.heapifyUp()
    }
    heapifyUp() {
        let currIndex = this.heap.length - 1;
        while (this.heap[currIndex] < this.heap[this.parent(currIndex)]) {
            this.swap(currIndex, this.parent(currIndex));
            currIndex = this.parent(currIndex);
        }
    }
    print() {
        console.log(this.heap);
    }
    getMin() {
        const maxValue = this.heap[0];
        this.heap.shift()
        this.heap.unshift(this.heap.pop())
        this.heapifyDown(this.heap, 0, this.heap.length);
        return maxValue;
    }
    heapifyDown(heap, i, heapSize) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let largest = i;

        if (left < heapSize && heap[left] < heap[largest]) largest = left
        if (right < heapSize && heap[right] < heap[largest]) largest = right

        if (i !== largest) {
            this.swap(i, largest);
            this.heapifyDown(heap, largest, heapSize)
        }
    }
}

const myHeap = new minHeap();
myHeap.add(4)
myHeap.add(1)
myHeap.add(6)
myHeap.add(3)
myHeap.add(8)
myHeap.add(2)
myHeap.add(9)
myHeap.add(7)
myHeap.print()
console.log("top--> ", myHeap.getMin());
myHeap.print()
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());