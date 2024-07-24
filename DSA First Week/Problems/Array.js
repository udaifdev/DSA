
// =========================== one start ===============================

// Method  ---->>  1
// function result(arr, Target) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == Target) {
//                 return  [arr[i] , arr[j]];
//             }
//         }
//     }
// }

// // Method ---->>  2
function result(arr, Target) {
    const nums = new Set()
    for (let i = 0; i < arr.length; i++) {
        let numbers = arr[i];
        let match = Target - numbers;
        if (nums.has(match)) {
            return [numbers, match]
        } else {
            nums.add(numbers)
        }
    }
    console.log("not targer number");
}

const arr = [7, 7, 6, 8, 9, 4, 0, 5, 12]
const Target = 10

const ans = result(arr, Target)
console.log(ans);

// =========================== one End ===============================





//  =========================== Two start ===============================

// const arr = [8, 3, 8, 2, 6, 8, 7, 1, 8, 9, 4, 8, 5]
// console.log('Array Orginal ---->>  ', arr);
// const Target = 8

//     function result(arr, targer) {
//         let temp;
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = arr.length - 1; j > i; j--) {
//                 if (arr[i] == targer && arr[j] !== targer) {
//                     temp = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = temp
//                 }
//             }
//         }
//         return arr
//     }

// const ans = result(arr, Target)
// console.log('Answer ----------->> ', ans);

// ===========================  Two End  ===============================

