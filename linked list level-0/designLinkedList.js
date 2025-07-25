//design a linkedlist

//function to create node
function Node(val) {
  this.val = val;
  this.next = null;
}

//function to create/initialise linkedlist
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

//function to add at head
function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}

//function to add at tail
function addAtTail(val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
}

//function to add at any index
function addAtIndex(index, val) {
  let newNode = new Node(val);
  if (index < 0 || index > this.size) return;
  if (index === 0) {
    addAtHead(val);
    return;
  } else if (index === this.size) {
    addAtTail(val);
    return;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
}

//function to get a value
function get(index) {
  if (index < 0 || index > this.size - 1) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
}

//function to delete at any index
function deleteAtIndex(index) {
  if (index < 0 || index > this.size - 1) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
}

//function to print linkedlist
function printLinkedList() {
  let curr = this.head;
  for (let i = 0; i < this.size; i++) {
    console.log(curr.val);
    curr = curr.next;
  }
}

//function to delete at tail
function deleteAtTail() {
  if (this.head === null) return;
  if (this.size === 1) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < this.size - 2; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
}

//initialising the linkedlist
MyLinkedList();
//adding at head
addAtHead(10);
//adding at index
addAtIndex(1, 20);
addAtIndex(2, 30);
addAtIndex(3, 40);
//adding at tail
addAtTail(50);
//delete at index
deleteAtIndex(4);
//delete at tail
deleteAtTail();
//printing linkedlist values
printLinkedList();
