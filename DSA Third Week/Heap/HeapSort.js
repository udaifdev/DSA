

// =========================== Heap Sort ===========================


function heapSort(arr) {
    let heap = createHeap(arr);
    let heapSize = arr.length;
    while (heapSize) {
        [heap[0], heap[heapSize - 1]] = [heap[heapSize - 1], heap[0]];
        heapSize--;
        heapify(heap, 0, heapSize)
    }
    return heap;
}


function createHeap(arr) {
    let heap = [...arr];
    for (let i = Math.floor((arr.length / 2) - 1); i >= 0; i--) {
        heapify(heap, i, heap.length - 1)
    }
    return heap
}


function heapify(heap, i, heapSize) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    if (left < heapSize && heap[left] > heap[largest]) {
        largest = left
    }
    if (right < heapSize && heap[right] > heap[largest]) {
        largest = right
    }
    if (i !== largest) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        heapify(heap, largest, heapSize);
    }
}

 console.log(heapSort([3,6,8,4,9]));