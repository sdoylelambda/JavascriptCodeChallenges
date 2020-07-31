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

  get(index) {
    // is index closer to head or tail?
    var head = this.head
    var tail = this.tail
    var sllIndex = 0
    var i = this.size / 2
    if (index < i) {
      // closer to head
      while (index != sllIndex) {
        head = head.next
        sllIndex++
      }
      console.log(head.element)
    } else {
      // closer to tail
      while (index != sllIndex) {
        tail = tail.prev
        sllIndex++
      }
      console.log(head.element)
    }
  }

  remove(index) {
    // tbc
  }

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

  printHead() {
    console.log(this.head.element)
  }

  printTail() {
    console.log(this.tail.element)
  }
}

const dll = new DoublyLinkedList()

dll.isEmpty()
dll.printSize()
dll.addHead(2)
dll.addHead(7)
dll.addTail(2)
dll.addTail(3)
dll.isEmpty()
dll.printSize()
dll.printList()
dll.printHead()
dll.printTail()
dll.get(3)
