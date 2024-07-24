
function Bubble_Sort(arr) {
    let swaped;
    do {
        swaped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swaped = true;
            }
        }
    } while (swaped);
}

const arr = [5, 7, 0, 2, 4, 10, 3, -7, 9, 1]
Bubble_Sort(arr)
console.log(arr);
