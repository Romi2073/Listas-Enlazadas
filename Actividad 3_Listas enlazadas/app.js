class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (value) {

    if (this.head === null) this.head = new Node(value);
    
    else {
        let refer = this.head
        while (refer.next) {
            refer = refer.next
        }
        refer.next = new Node(value)
    }

}

let list = new LinkedList()
list.add(55)
list.add(4)
list.add(4)
console.log(list);

//let node = new Node(5);
//console.log(node);


