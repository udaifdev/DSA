
//non repeat element

const arr = [1, 2, 9, 7, 2, 5, 3, 4, 7, 5, 6]


function test(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] == arr[j]) {
                flag = true;
                break;
            }
        }
         if (!flag) {
            console.log(arr[i]);
        }
    }
}

test(arr)

 