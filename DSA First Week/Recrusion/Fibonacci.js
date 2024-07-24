

function fibonacci(val) {
    if (val == 1 || val == 0) {
        return val
    }
    let a = fibonacci(val - 1)
    let b = fibonacci(val - 2)
    let c = a + b
    return c
}
// console.log(fibonacci(6));

function fib(val){
    if ( val == 0 ){
        return val
    }
    console.log(fibonacci(val));
        return fib(val-1) 
}


console.log(fib(10));