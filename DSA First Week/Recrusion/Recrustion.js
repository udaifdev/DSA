


// Recrsion Factorial Number Basic Problem 
function fun(n) {
    if (n < 1) {
        return 1;
    }
    return n * fun(n - 1)
}

let ans = fun(5)
console.log("-->  ", ans);


 