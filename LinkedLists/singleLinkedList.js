// node
class Node {
  constructor(element) {
    this.next = null
    this.element = element
  }
}
// sll
class LinkedList {
  constructor(node) {
    this.head = null
    this.size = 0
  }

  // add
  add(element) {
    var node = new Node(element)
    if (this.head == null) {
      this.head = node
      this.size += 1
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      this.size += 1
    }
  }

  // insertAt(element, location)
  // removeFrom(location)
  removeElement(element) {
    if (this.head === element) {
      this.head = null
      this.size = 0
    } else {
      var current = this.head
      while (current.element != element) {
        current = current.next
      }
      this.head = null
      this.size = 0
    }
  }

  // print
  printList() {
    var str = ''
    var current = this.head
    while (current) {
      str += current.element + ' '
      current = current.next
    }
    console.log(str)
  }

  // size
  printSize() {
    console.log(this.size)
  }

  // isEmpty
  isEmpty() {
    if (this.size === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}

var ll = new LinkedList()

ll.isEmpty()
ll.add(5)
ll.add(10)
ll.add(11)
ll.printList()
ll.printSize()
ll.isEmpty()
ll.removeElement(1)
ll.printList()
ll.printSize()
