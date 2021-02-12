// The node class in named with _ .
// The underscore simply indicates that the node class is a private class that shoul not
// be accessible by anyone else other than the linked list class.

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// The primary operation in a linked list are insert, remove, and get(find).
// head indicates the beginning of the list.

class LinkedList {
  constructor() {
    this.head = null;
  }

  //The head always contains the 1st node. In this case, we start with an empty list, represented by null.
  //O(1)
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  //Create a new node item
  //Check to see if the list is empty, if it is, then insert the new item as the only item in the list
  //Start at the beginning of the list and move through the list until you reach the end of the list
  //Set the end node's next pointer to the new node
  //The new node's next pointer is null (indicating that the new node now is the last node on the list)
  //O(n)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  //insertBefore : inserts a new node before a given node containing a key.
  insertBefore(newItem, value) {
    if (this.head === null) {
      this.insertFirst(newItem);
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const newNode = new _Node(newItem, previousNode.next);

    previousNode.next = newNode;
  }
  // insertAfter : inserts a new node after a node containing the key.
  insertAfter(newItem, value) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (value.next === null) {
      this.insertLast(newItem);
      return;
    }

    const newNode = new _Node(newItem, currentNode.next);
    currentNode.next = newNode;
  }
  // insertAt : inserts an item at a specific position in the linked list.
  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
    }

    let currentNode = this.head;
    let currentPosition = 0;
    while (currentPosition !== position) {
      currentPosition++;
      currentNode = currentNode.next;
    }

    const newNode = new _Node(item, currentNode.next);

    currentNode.next = newNode;
  }

  //get
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
        //otherwise, keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  //removal
  //delete from the beginning of the list.
  //delete from the end of the list.
  //delete a node between 2 other nodes.

  //best-case performance is O(1), and the average and worst cases are O(n) due to finding the node
  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

const main = function () {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");

  SLL.insertLast("Tauhida");

  SLL.remove("squirrel");

  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt("Kat", 2);
  SLL.remove("Tauhida");
  display(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, "Kat");
  findLast(SLL);
  //reverse(SLL)
  display(SLL);
  thirdFromTheEnd(SLL)
  middleOfList(SLL);

  let newSLL = new LinkedList();
  newSLL.insertFirst(1);
  newSLL.insertLast(2);
  newSLL.insertLast(3);
  newSLL.insertLast(4);

  cycleInList(newSLL);
  display(newSLL);
};

// Q3 Supplemental functions for a linked list
// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

//display
const display = function (list) {
  let currentNode = list.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

//size
const size = function (list) {
  let currentNode = list.head;
  let size = 0;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    size++;
  }
  console.log(size);
};

//isEmpty
const isEmpty = function (list) {
  let currentNode = list.head;
  if (currentNode === null) {
    console.log(true);
    return;
  }
  console.log(false);
  return;
};

//findPrevious
/*const findPrevious = function(list, item){
    let currentNode = list.head;
    console.log(currentNode);
    if(currentNode === null){
      console.log("Item not found");
      return;
    }
    let previousNode = currentNode;
    while(currentNode !== item){
      previousNode = currentNode;
    }
    return previousNode;
  }*/

const findPrevious = function (list, item) {
  let currentNode = list.head;
  let previousNode = list.head;
  //console.log(currentNode);

  if (currentNode === null) {
    console.log("Item not found");
    return;
  }

  while (currentNode !== null && currentNode.value !== item) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  console.log(previousNode.value);
};

//findLast
const findLast = function (list) {
  let currentNode = list.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
};

// Q5 Reverse a list

//all pointers should point backward. program should reverse the direction of a given singly linked list.
function reverse(list) {
  let currentNode = list.head;
  let previousNode = null;

  while (currentNode) {
    let nextNode = currentNode.next;
    //reverse pointer
    currentNode.next = previousNode;
    //increase previous to current
    previousNode = currentNode;
    //increase current to next or end of the list
    currentNode = nextNode;
  }
  list.head = previousNode;
  //change the head;
  return previousNode; 
}

// Q6. 3rd from the end
//Write an algorithm to find the 3rd element from the end of a linked list

function thirdFromTheEnd(list){
  let currentNode = list.head;
  if(currentNode === null){
    console.log("Item not found");
      return;
  }
  while(currentNode.next.next.next !== null){
    currentNode = currentNode.next;
  }
  console.log(currentNode);
  return;
}

// Q7 Middle of a list
//Write an algorithm to find the middle element of a linked list. 
//finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list.


function middleOfList(list){
  let currentNode = list.head;

  if(currentNode === null){
    return null;
  }
  else if(currentNode.next === null){
    return currentNode;
  }
  else{
    let fast = list.head;
    let slow = list.head;
    while((fast !== null) && (fast.next !== null)){
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow);
    return ;
  }
}

// Q8. Cycle in a list
//Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list).

function cycleInList(list){
  let currentNode = list.head;

  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }
  currentNode.next = list.head;
  console.log(list);
  return;
}

console.log(main());
