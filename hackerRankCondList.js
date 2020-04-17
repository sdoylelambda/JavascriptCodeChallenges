// UPER
// U
// TAKE A ARRAY(LIST) AND REMOVE DUPLICATES AND RETURN THE ARRAY(LIST)
// EX: INPUT [3, 4, 3, 6] OUTPUT [3, 4, 6]

// ?
// IF TAKING INPUT OF AN INT, WHERE DOES ARRAY COME FROM?

// P
// PUT ALL VALUES FROM ARRAY INTO A DUPLICATE ARRAY
// CHECK VALUE OF EACH NODE, PUT IN ARRAY,
// IF VALUE ALREADY IN ARRAY DON'T ADD
// RETURN NEW ARRAY

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    // DATA IN AN INTEGER
    this.data = nodeData
    // NULL IF AT TAIL
    this.next = null
  }
}

// SHOULDN'T NEED TO MODIFY THESE 2
const SinglyLinkedList = class {
  constructor() {
    this.head = null
    this.tail = null
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData)

    if (this.head == null) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
  }
}

// CODE ALL HERE
function condense(head) {
  // Write your code here
}
