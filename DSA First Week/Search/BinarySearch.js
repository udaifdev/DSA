


// ======================================== Normal Function ======================

function binary(arrays, targer) {
    let arr = arrays.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let center = Math.floor((start + end) / 2);
        if (targer === arr[center]) {
            return center;
        }
        if (targer < arr[center]) {
            end = center - 1;
        } else {
            start = center + 1;
        }
    }
    return -1;
}

const arrays = [12, 8, 10, 12, 4, 14, 16, 18, 5, 20]
const targer = 12

console.log("the value is ----> " ,binary(arrays, targer));

// ================================= End ============================

// =============================== Recursion Function ===============
function RecursionBinary(arr, tar) {
    return SearchbinaryHelper(arr, tar, 0, arr.length - 1)
}


function SearchbinaryHelper(arr, tar, left, right) {
    if (left > right) {
        return -1;
    }
    let middleNumber = Math.floor((left + right) / 2);
    if (tar === arr[middleNumber]) {
        return middleNumber;
    }

    if (tar < arr[middleNumber]) {
        return SearchbinaryHelper(arr, tar, left, middleNumber - 1)
    } else {
        return SearchbinaryHelper(arr, tar, middleNumber + 1, right)
    }
}

const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99]
const tar = 44;

console.log("the value is ------> " ,RecursionBinary(arr, tar));
// ====================================== End ===========================

