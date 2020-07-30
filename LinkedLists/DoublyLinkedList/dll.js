class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  addHead(element) {
    const node = new Node(element)
    var cur = this.head
    var prev = cur
    // this.head = node
    // this.next = prev
    if (this.tail === null || this.head === null) {
      this.tail = node
      this.head = node
    } else {
      this.head = node
      node.next = cur
    }
    this.size++
  }

  addTail(element) {
    const node = new Node(element)
    var cur = this.head
    var prev = cur
    if (cur === null) {
      this.head = node
      this.tail = node
    } else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
      this.tail = node
    }
    this.size++
  }

  // get(index)
  // remove(index)

  // helper methods

  isEmpty() {
    if (this.head === null && this.tail === null && this.size === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }

  printSize() {
    console.log(this.size)
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
}

const dll = new DoublyLinkedList()

dll.isEmpty()
dll.printSize()
dll.addHead(7)
dll.addHead(7)
dll.addTail(2)
dll.addTail(3)
dll.isEmpty()
dll.printSize()
dll.printList()
