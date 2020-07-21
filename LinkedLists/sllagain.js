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

  add(element) {
    const node = new Node(element)
    var cur = this.head
    if (this.head === null) {
      this.head = node
    } else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
      // node.next = cur
    }
    this.size++
  }

  insertAt(element, location) {
    const node = new Node(element)
    var cur = this.head
    for (var i = 0; i < location - 1; i++) {
      cur = cur.next
    }
    var oldNode = cur.next
    console.log('old', oldNode)
    cur.next = node
    node.next = oldNode
    this.size++
  }

  removeFrom(location) {
    var cur = this.head
    var prev = cur
    for (var i = 0; i < location - 1; i++) {
      prev = cur
      cur = cur.next
    }
    prev.next = cur.next
    this.size--
  }

  // removeElement(element)

  // Helper Methods
  isEmpty() {
    if (this.size === 0) {
      console.log(true)
      return true
    } else {
      console.log(false)
      return false
    }
  }
  sizeOfList() {
    console.log(this.size)
  }
  printList() {
    var str = ''
    var cur = this.head
    while (cur) {
      str += cur.element + ' '
      cur = cur.next
    }
    console.log(str)
  }
}

var ll = new SinglyLinkedList()
ll.isEmpty()
ll.add(5)
ll.add(5)
ll.insertAt(10, 0)
ll.removeFrom(1)
ll.printList()
ll.sizeOfList()
ll.isEmpty()
