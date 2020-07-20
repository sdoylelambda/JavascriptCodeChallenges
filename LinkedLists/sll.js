class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(node) {
    this.head = null
    this.size = 0
  }
  // add to head
  addToHead(element) {
    var newNode = new Node(element)
    var oldHead = this.head
    this.head = newNode
    newNode.next = oldHead
    this.size += 1
  }

  // add to location
  addToLocation(element, location) {
    var node = new Node(element)
    var cur = this.head
    for (var i = 0; i < location - 1; i++) {
      cur = cur.next
    }
    var nextElement = cur.next
    cur.next = node
    node.next = nextElement
    this.size += 1
  }

  // print length
  printLength() {
    console.log(this.size)
  }

  // print is empty

  // print list
  printList() {
    var str = ''
    var cur = this.head
    while (cur) {
      str += cur.element + ', '
      cur = cur.next
    }
    console.log(str)
  }

  // functions to be implemented
  add(element) {
    // to end
    var node = new Node(element)
    if (this.size === 0) {
      this.head = node
    } else {
      var cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.size += 1
  }
  // insertAt(element, location)
  // removeFrom(location)
  // removeElement(element)

  // Helper Methods
  // isEmpty
  // size_Of_List
  // PrintList
}

var ll = new SinglyLinkedList()

ll.add(4)
ll.add(2)
ll.add(4)
ll.add(2)
ll.addToHead(4)
ll.add(2)
ll.addToLocation(8, 1)
ll.printList()
ll.printLength()
