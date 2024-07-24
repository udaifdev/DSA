
console.log("1---------->>");

// ( 1 ) ============================= Append Value ===================

//  class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
//  }


//  class linkedList {
//     constructor() {
//         this.head = null;
//     }

//     Add_Node (value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next   
//             }
//             curr.next = node
//         }
//     }

//     Print_Value() {
//         if (this.head === null) {
//             console.log("The Node Is Empty -------->>  ");
//         } else {
//             let curr = this.head;
//             let disValues = ''
//             while (curr) {
//                 disValues = disValues + ` ${curr.value}`
//                 curr = curr.next;
//             }
//             console.log('The Values Are ---->  ' , disValues);
//         }
//     }
//  }

//  const list = new linkedList()

//  list.Add_Node(1)
//  list.Add_Node(2)
//  list.Add_Node(3)
//  list.Add_Node(4)

// list.Print_Value()

// list.Add_Node(5)
// list.Add_Node(6)

// list.Print_Value()


console.log("2---------->>");

// ================================== Prepend Value  =======================

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//     }

//     Add_Node_First(value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//         } else {
//             node.next = this.head;
//             this.head = node
//         }
//     }

//     Print_Value() {
//         if (this.head === null) {
//             console.log('This Node Is Empty --->');
//         } else {
//             let curr = this.head;
//             let disValues = ''
//             while (curr) {
//                 disValues = disValues + ` ${curr.value}`
//                 curr = curr.next
//             }
//             console.log(' The Values Are ------->  ', disValues);
//         }
//     }
// }

// const list = new linkedList()

// list.Add_Node_First(1)
// list.Add_Node_First(2)
// list.Add_Node_First(3)
// list.Add_Node_First(4)
// list.Add_Node_First(5)

// list.Print_Value()

// list.Add_Node_First(10)
// list.Add_Node_First(20)

// list.Print_Value()



console.log("3---------->>");

// =================================== Insert Values ====================
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//     }

//     Add_Node_Last(value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//         } else {
//             let curr = this.head
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//     }

//     insert_Value(value, index) {
//         if (index < 0) {
//             return null
//         }

//         let node = new Node(value)

//         if (index === 0) {
//             node.next = this.head
//             this.head = node
//             return
//         } else {
//             let curr = this.head;
//             let length = 0
//             while (curr) {
//                 length ++;
//                 curr = curr.next                
//             }
//             console.log('Numbers of length --------> ' , length)

//             if (index >= length) {
//                 this.Add_Node_Last(value)
//                 return
//             }
//             curr = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next;
//             }
//             node.next = curr.next
//             curr.next = node;
//         }

//     }

//     value_print() {
//         if (!this.head === null) {
//             console.log('This Node Is Empty -----> ');
//         } else {
//             let curr = this.head;
//             let disValues = ''
//             while (curr) {
//                 disValues = disValues + ` ${curr.value}`
//                 curr = curr.next
//             }
//             console.log('The Values Are -------->   ', disValues);
//         }
//     }
// }

// const list = new linkedList()

// list.Add_Node_Last(1)
// list.Add_Node_Last(2)
// list.value_print()
// list.Add_Node_Last(4)
// list.Add_Node_Last(5)
// list.value_print()

// list.insert_Value(3, 2)
// list.value_print()
// list.insert_Value(10, 0)
// list.value_print()
// list.insert_Value(6, 9)
// list.value_print()



console.log("4---------->>");

// =====================================  Index Delete ===============
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//     }

//     Add_Node_First(value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//         } else {
//             node.next = this.head;
//             this.head = node
//         }
//     }

//     delete_Index(index) {
//         let curr = this.head;
//         let length = 0
//         while (curr) {
//             length++;
//             curr = curr.next;
//         }
//         console.log('The length is --->  ', length);

//         if (index < 0 || index > length) {
//             console.log('Not founded  you given the index --->', index);
//             return
//         }
//         let deleteNode;
//         if (index === 0) {
//             deleteNode = this.head;
//             this.head = this.head.next
//         } else {
//             let previous = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 previous = previous.next
//             }
//             deleteNode = previous.next;
//             previous.next = deleteNode.next
//         }
//         return deleteNode.value
//     }

//     print_Value() {
//         if (this.head == null) {
//             console.log('This Node Is Empty ----> ');
//         } else {
//             let curr = this.head
//             let disValues = ''
//             while (curr) {
//                 disValues = disValues + ` ${curr.value}`
//                 curr = curr.next
//             }
//             console.log('The Values Are ------->  ', disValues);
//         }
//     }
// }

// const list = new linkedList()

// list.Add_Node_First(5)
// list.Add_Node_First(10)
// list.Add_Node_First(20)
// list.Add_Node_First(30)
// list.Add_Node_First(40)
// list.Add_Node_First(20)
// list.Add_Node_First(50)
// list.Add_Node_First(60)
// list.print_Value()

// list.delete_Index(2)
// list.print_Value()




console.log('5---------->>');

// ======================================  Value Delete =======================
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//     }

//     Add_node(value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//         } else {
//             let curr = this.head
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//     }

//     Delete_Value(value) {
//         if (!this.head) {
//             return null
//         }
//         if (this.head.value == value) {
//             this.head = this.head.next
//             return null
//         } else {
//             let previous = this.head
//             while (previous.next && previous.next.value !== value) {
//                 previous = previous.next
//             }
//             if (previous.next) {
//                 let removeNode = previous.next
//                 previous.next = removeNode.next
//                 return value
//             }
//             return null
//         }        
//     }

//     Print_Values() {
//         if (this.head === null) {
//             console.log("This Node Is Empty ---------> ");
//         } else {
//             let curr = this.head
//             let disValues = ''
//             while (curr) {
//                 disValues = disValues + ` ${curr.value}`
//                 curr = curr.next
//             }
//             console.log('The Values Are --------> ', disValues);
//         }
//     }
// }

// const list = new linkedList()

// list.Add_node(1)
// list.Add_node(2)
// list.Add_node(3)
// list.Add_node(4)
// list.Add_node(4)
// list.Add_node(5)

// list.Print_Values()
// console.log('deleted value ------->  ' , list.Delete_Value(4));
// list.Print_Values()


console.log('6---------->>');

// ====================================== Reverse =======================
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//     }

//     Add_Node(value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//         } else {
//             let curr = this.head
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//     }

//     Reverse(value) {
//         let previous = null
//         let curr = this.head
//         while (curr) {
//             let next = curr.next;
//             curr.next = previous
//             previous = curr;
//             curr = next
//         }
//         this.head = previous
//     }

//     Print () {
//         if(this.head == null) {
//             console.log("The Node Is EmptY");
//             return
//         } else {
//             let curr = this.head;
//             let disValues = ''
//              while (curr) {
//                 disValues = disValues + ` ${curr.value}`
//                 curr = curr.next;
//              }
//              console.log('The Values Are ------>  ' ,disValues);
//         }
//     }
// }

// const list = new linkedList()

// list.Add_Node(1)
// list.Add_Node(2)
// list.Add_Node(3)
// list.Add_Node(4)
// list.Add_Node(5)

// list.Print()



console.log('7----------->>');

// =================================== Search Index ===================

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//     }

//     Add_Node(value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node;
//         } else {
//             let curr = this.head
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//     }

//     search(value) {
//         if (this.head == null) {
//             return -1
//         }
//         let i = 0
//         let curr = this.head;
//         while (curr) {
//             if (curr.value == value) {
//                 return i;
//             }
//             curr = curr.next
//             i++
//         }
//         return -1

//     }

//     Print() {
//         if (this.head === null) {
//             console.log("The Node is Empty ------>");
//         } else {
//             let curr = this.head;
//             let disValues = ''
//             while (curr) {
//                 disValues = disValues + ` ${curr.value}`
//                 curr = curr.next
//             }
//             console.log('The Values Are ----->  ', disValues);
//         }
//     }
// }

// const list = new linkedList()

// list.Add_Node(11)
// list.Add_Node(12)
// list.Add_Node(13)
// list.Add_Node(1000)
// list.Add_Node(15)

// list.Print()
//  console.log(list.search(1000));



console.log('8----------->>');

// ================================== Middle Element ==================

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
    }

    Add_Node(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
    }

    Middle_Num() {
        if (this.head === null) {
            return null
        }
        let fast = this.head
        let slow = this.head
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value
    }

    Dlt_Middle() {
        if (this.head === null) {
            return null
        }
        let fast = this.head;
        let slow = this.head;
        let previous = null;
        while (fast && fast.next) {
            fast = fast.next.next;
            previous = slow;
            slow = slow.next;
        }
        const middleValue = slow.value

        if (previous) {
            previous.next = slow.next;
        } else {
            this.head = slow.next
        }
        return middleValue;
    }

    Print() {
        if (this.head == null) {
            console.log("The Node Is Empty ------->> ");
        } else {
            let curr = this.head
            let disValues = ''
            while (curr) {
                disValues = disValues + ` ${curr.value}`
                curr = curr.next
            }
            console.log('The Values Are --------->>  ', disValues);
        }
    }
}

const list = new linkedList()

list.Add_Node(20)
list.Add_Node(40)
list.Add_Node(60)

list.Print()

console.log("The Middle Number Is -----> ", list.Middle_Num());

list.Dlt_Middle() 
list.Print()
 
