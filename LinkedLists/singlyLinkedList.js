// Singly Linked List

// node
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// singlyLinkedList
class SinglyLinkedList {
  constructor(node) {
    this.head = null
    this.size = 0
  }

  // add to end
  add(element) {
    var node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      var cur = this.head
      while (cur) {
        cur = this.next
      }
      cur.next = node
    }
    this.size += 1
  }

  // delete

  printList() {
    var str = ''
    var cur = this.head
    while (cur) {
      str += cur.element
      cur = this.next
    }

    console.log(str)
  }

  isEmpty() {
    if (this.size === 0) {
      console.log('true')
      return true
    } else {
      console.log('false')
      return false
    }
  }

  // listLength
  printSize() {
    console.log(this.size)
  }
}

var ll = new SinglyLinkedList()

ll.add(5)
ll.add(5)
ll.isEmpty()
ll.printList()
ll.printSize()
