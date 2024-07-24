
function StringReverse(str) {
    if (str.length === 0 ) {
        return ''
    }   
    return StringReverse(str.substring(1)) + str.charAt(0)  
}

console.log( StringReverse('fiadu dammahuM '));

 
