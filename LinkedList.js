// The node class in named with _ .
// The underscore simply indicates that the node class is a private class that shoul not
// be accessible by anyone else other than the linked list class.

class _Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

// The primary operation in a linked list are insert, remove, and get(find).
// head indicates the beginning of the list.

class LinkedList{
    constructor(){
        this.head = null;
    }

    //The head always contains the 1st node. In this case, we start with an empty list, represented by null.
    //O(1)
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }
    //Create a new node item
    //Check to see if the list is empty, if it is, then insert the new item as the only item in the list
    //Start at the beginning of the list and move through the list until you reach the end of the list
    //Set the end node's next pointer to the new node
    //The new node's next pointer is null (indicating that the new node now is the last node on the list)
    //O(n)
    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next ;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    //get
    find(item){
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if (!this.head){
            return null;
        }
        //check for the item
        while(currNode.value !== item){
            //return null if it's the end of the list and the item is not on the list
            if(currNode.next === null){
                return null;
            }
            else{
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
    remove(item){
        //if the list is empty
        if(!this.head){
            return null;
        }
        //if the node to be removed is head, make the next node head
        if(this.head.value === item){
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)){
            //save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return ;
        }
        previousNode.next = currNode.next;
    }
}