// JavaScript program for implementation
// of Heap Sort

function sort(arr) {
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}

function heapify(arr, N, i) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, N, largest);
    }
}

function peek() {
    return
}

function printArray(arr) {
    for (var i = 0; i < arr.length; ++i)
        console.log(arr[i] + '');
}

var arr = [12, 11, 4, 13, 5, 6, 7];
var N = arr.length;

sort(arr);
printArray(arr, N);
