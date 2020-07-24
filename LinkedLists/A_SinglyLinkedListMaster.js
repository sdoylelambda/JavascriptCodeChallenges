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
    var cur = this.head
    var LLLocation = 0
    while (location != LLLocation) {
      cur = cur.next
      LLLocation++
    }
    console.log(cur.element)
  }

  deleteFromLocation(location) {
    var cur = this.head
    // console.log('cur', cur)
    var prev = cur
    var SLLLocation = 0
    // console.log('next', cur)
    if (location === 0) {
      this.head = cur.next
    } else {
      while (location != SLLLocation) {
        prev = cur
        cur = cur.next
        SLLLocation++
      }
      prev.next = cur.next
      return cur.element
    }
    this.size--
  }

  deleteElement(element) {
    var cur = this.head
    if (cur.element === element) {
      this.next = cur.next
    }
  }

  reverseList() {
    var arr = []
    var reverseArr = []
    var cur = this.head
    while (cur) {
      arr.push(cur.element)
      this.deleteFromLocation(0)
      cur = cur.next
    }
    // console.log('arr', arr)
    reverseArr = arr.reverse()
    // console.log('output', reverseArr)
    this.addArray(reverseArr)
  }

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

  addArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i]
      this.add(element)
    }
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
ll.reverseList(this.head)
ll.printList()
