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
    var cur = this.head
    this.head = cur
    this.head = node
    node.next = cur
  }

  addToBack(element) {
    const node = new Node(element)
    var cur = this.head
    if (this.head === null) {
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
    var listLocation = 0
    var cur = this.head
  }

  deleteFromLocation() {}

  deleteElement() {}

  // O(n) time & O(1) space
  reverseList(head) {
    let node = head,
      previous,
      tmp

    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next

      // reverse pointer
      node.next = previous

      // step forward in the list
      previous = node
      node = tmp
    }

    return previous
  }

  // Helper Methods

  printIsEmpty() {
    const empty = this.head === null ? true : false
    console.log(empty)
  }

  printSize() {
    const size = this.size
    console.log(size)
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

const ll = new SinglyLinkedList()

ll.printIsEmpty()
// ll.printSize()
ll.addToFront(7)
ll.addToFront(2)
ll.addToBack(3)
ll.addToBack(9)
ll.addToBack(5)
ll.printList()
// ll.printIsEmpty()
ll.printSize()
// ll.retrieve(1)
// ll.deleteFromLocation(1)
// ll.deleteElement(2)
// ll.printList()
// ll.printIsEmpty()
// ll.printSize()
ll.reverseList(ll.head)
ll.printList()
