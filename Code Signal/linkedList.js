// node class
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// linked list class
class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  add(element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
      this.size += 1
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      this.next = node
      this.size += 1
    }
  }

  // insertAt

  // removeFrom

  // removeElement

  // Helper Methods

  // indexOf

  // isEmpty

  // size_of_list

  printList() {
    var str = ''
    var current = this.head
    while (current) {
      str += current.element
      current = this.next
    }
    console.log(str)
  }
}

var ll = new LinkedList()
ll.add(150)
ll.printList()
