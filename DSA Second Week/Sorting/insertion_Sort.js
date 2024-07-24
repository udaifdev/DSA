

function Insertion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToinsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToinsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToinsert
    }
}

let arr = [4, 3, 5, 0, 2, 7, -8, 1, 10]
Insertion(arr)
console.log(arr);