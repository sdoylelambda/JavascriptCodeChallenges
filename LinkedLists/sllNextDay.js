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

  // add to back
  add(element) {
    const node = new Node(element)
    var cur = this.head
    if (cur === null) {
      this.head = node
    } else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.size++
  }

  addToFront(element) {
    const node = new Node(element)
    var cur = this.head
    var prev = cur
    this.head = node
    node.next = prev
    this.size++
  }

  // retrieve from location
  retrieve(location) {
    if (location === 0) {
      console.log('retrieve', this.head.element)
    } else {
      var cur = this.head
      var SLLLocation = 0
      while (SLLLocation != location) {
        cur = cur.next
        SLLLocation++
      }
      console.log('retrieve:', cur.element)
    }
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
    this.addArray(reverseArr) // this?
  }

  // helper

  addArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i]
      this.add(element)
    }
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

  printSize() {
    console.log(this.size)
  }

  printIsEmpty() {
    if (this.size === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }

  //
}

var ll = new SinglyLinkedList()

// ll.printIsEmpty()
// ll.printSize()
ll.addToFront(7)
ll.addToFront(2)
ll.add(3)
ll.printList()
// ll.printIsEmpty()
// ll.printSize()
ll.retrieve(1)
ll.deleteFromLocation(1)
ll.deleteElement(2)
ll.printList()
// ll.printIsEmpty()
// ll.printSize()
ll.reverseList()
ll.printList()
