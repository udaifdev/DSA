


// =================================== Linear Search =========================

function LinearSearch(target, Arr) {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] == target) {
            return i;
        }
    }
    return -1
}

const target = 99;
const Arr = [11, 32, 44, 67, 25, 87, 99, 40, 15]

let ans = LinearSearch(target, Arr)
console.log('---->>  ', ans);
