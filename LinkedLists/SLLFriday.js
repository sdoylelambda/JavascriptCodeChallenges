class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addToFront(element) {
    const node = new Node(element)
    var oldHead = this.head
    this.head = node
    node.next = oldHead
    this.size++
  }

  addToBack(element) {
    const node = new Node(element)
    var cur = this.head
    if (cur === null) {
      this.head = node
    } else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.size++
  }

  retrieve(location) {
    var cur = this.head
    var LLLocation = 0
    while (location != LLLocation) {
      cur = cur.next
      LLLocation++
    }
    console.log(cur.element)
  }

  reverseList() {
    var cur = this.head
    var prev = cur
    var tmp = this.next
    while (cur) {
      tmp = cur.next
      cur.next = prev
      prev = cur
      cur = cur.next
    }
    // return prev
  }

  printList() {
    var cur = this.head
    var str = ''
    while (cur) {
      str += cur.element + ' '
      cur = cur.next
    }
    console.log(str)
  }

  printIsEmpty() {
    const empty = this.head === null ? true : false
    console.log(empty)
  }

  printSize() {
    console.log(this.size)
  }
}

const ll = new SinglyLinkedList()

// ll.printIsEmpty()

ll.addToBack(3)
ll.addToBack(3)
ll.addToFront(5)
ll.addToFront(7)
ll.printList()

// ll.printSize()
// ll.printIsEmpty()

// ll.retrieve(1)

ll.reverseList()
// ll.printSize()
ll.printList()
