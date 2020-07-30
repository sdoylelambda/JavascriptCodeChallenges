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

  addToHead(element) {
    const node = new Node(element)
    var cur = this.head
    var prev = cur
    this.head = node
    node.next = prev
    this.size++
  }

  addToEnd(element) {
    const node = new Node(element)
    var cur = this.head
    if (this.head === null) {
      this.head = node
    } else {
      while (cur) {
        cur = cur.next
      }
      cur = node
    }
    this.size++
  }

  deleteFrom(location) {
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

  reverseList() {
    var list = []
    var cur = this.head
    while (cur) {
      list.push(cur.element)
      this.deleteFrom(0)
      cur = cur.next
    }
    const reverseList = list.reverse()
    for (var i = 0; i < reverseList.length; i++) {
      const listElement = reverseList[i]
      this.addToEnd(listElement)
    }
  }

  findBy(location) {
    var listLocation = 0
    var cur = this.head
    while (location != listLocation) {
      listLocation++
      cur = cur.next
    }
    console.log(cur.element)
  }

  isInList(value) {
    var cur = this.head
    var inList = false
    while (cur.next) {
      if ((cur.element = value)) {
        inList = true
      }
    }
    console.log(inList)
  }

  // helper methods

  isListEmpty() {
    if (this.head === null) {
      console.log(true)
    } else {
      console.log(false)
    }
  }

  listSize() {
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

const ll = new SinglyLinkedList()

// ll.isListEmpty()
// ll.listSize()
ll.addToEnd(1)
ll.addToHead(5)
ll.addToHead(4)
ll.addToHead(4)
ll.addToEnd(1)
ll.printList()
ll.deleteFrom(0)
// ll.isListEmpty()
ll.listSize()
ll.printList()
ll.reverseList()
ll.printList()
