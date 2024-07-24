

function selection_sort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp;
    }
    return arr
}

console.log(selection_sort([4, 3, 6, 2, 9, 5, 1, 7]));