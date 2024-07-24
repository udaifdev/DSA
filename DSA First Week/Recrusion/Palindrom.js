
 function palindrom(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1]

    if(str[0] === str.slice(-1)) {
        return palindrom(str.slice(1,-1))
    } else {
        return false
    }
 }

 console.log(palindrom('r'));