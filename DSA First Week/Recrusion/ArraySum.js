

function arrSum(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    let b = arr.pop()
    return b + arrSum(arr)
}

let arr = [1, 2, 3, 4, 5]
console.log(arrSum(arr));