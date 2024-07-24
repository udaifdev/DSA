
class HashTable {
    constructor (size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0;
        for (let i = 0 ; i < key.length ; i++) {
            total += key.charCodeAt(i)            
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (!bucket) this.table[index] = [[key,value]]          
        else {
            let sameItemKey = bucket.find( item => item[0] === key)
            if (sameItemKey) sameItemKey[1] = value;
            else bucket.push([key,value])
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket) {
            let sameItemKey = bucket.find(item => item[0] === key)
            if(sameItemKey) return sameItemKey[1]            
        }
        return undefined
    }

    display() {
        for(let i = 0 ; i < this.table.length; i++) {
            if (this.table[i]) console.log(i,this.table[i]);
        }
    }
}

const check = new HashTable(50)
check.set('name' ,'shalu')
check.set('sub' , 'coding')
check.set('age' , 25)
check.set('place' , 'kerala')
check.set('vehical' , 'car')
check.display()

console.log('the value --> ', check.get('sub'));




function quick_sort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quick_sort(left), pivot, ...quick_sort(right)]
}



const arr = [5, 3, 8, 7, 1, 9, 4]

console.log(quick_sort(arr));