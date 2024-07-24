
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    if (left > right) {
        return -1
    }
    let middleNumber = Math.floor((left + right) / 2)
    if (target == arr[middleNumber]) {
        return middleNumber
    }
     
    if (target < arr[middleNumber]) {
         return middleNumber - 1
    } else {
         return middleNumber + 1
    }
    return -1
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 2
console.log(binarySearch(arr, target));
