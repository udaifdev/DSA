
function Merge_Sort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(Merge_Sort(leftArr), Merge_Sort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortArr.push(leftArr.shift())
        } else {
            sortArr.push(rightArr.shift())
        }
    }
    return [...sortArr, ...leftArr, ...rightArr]
}

let arr = [4, 3, 6, 1, 9, 8, 5, 2]
console.log(Merge_Sort(arr));