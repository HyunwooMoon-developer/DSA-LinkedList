class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    this.head = new _Node(item);
    this.tail = this.head;
  }
  insertLast(item) {
    let node = new _Node(item);
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currNode.value !== item) {
      //return null if it's the end of the list and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise, keep looking;
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head;
    if (this.head.value === item) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }

    //start at the head
    let currNode = this.head;
    //keep track of previous
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;
  }
}

function display(list) {
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function reverse(list) {
  let currNode = list.head;
  let prevNode = null;

  while (currNode) {
    let nextNode = currNode.next;
    currNode.next = prevNode;
    currNode.prev = nextNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  list.tail = list.head;
  list.head = prevNode;
}

function mainDLL() {
  let DLL = new doublyLinkedList();

  DLL.insertFirst("Aquaria");
  DLL.insertLast("Caprica");
  DLL.insertLast("Gemenon");
  DLL.insertLast("Picon");

  DLL.insertLast("Tauron");
  console.log(DLL);
  display(DLL);

  DLL.remove("Picon");

  reverse(DLL);
  console.log(DLL);
  display(DLL);
}

mainDLL();
