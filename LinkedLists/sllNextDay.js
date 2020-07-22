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
      console.log(this.head.element)
    } else {
      var cur = this.head
      if (cur.next != location) {
        cur = cur.next
      }
      console.log(cur.element)
    }
  }

  deleteFromLocation(location) {
    var cur = this.head
    var next = this.next
    console.log('next', cur)
    if (location === 0) {
      this.head = cur.next
    }
    this.size--
  }

  deleteElement(element) {
    var cur = this.head
    if (cur.element === element) {
      this.next = cur
    }
  }

  reverseList() {
    var arr = []
    var reverseArr = []
    var cur = this.head
    while (cur) {
      arr.push(cur.element)
      cur = cur.next
    }
    console.log('arr', arr)
    reverseArr = arr.reverse()
    console.log('output', reverseArr)
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

ll.printIsEmpty()
ll.printSize()
ll.addToFront(7)
ll.addToFront(2)
ll.add(3)
ll.printList()
ll.printIsEmpty()
ll.printSize()
ll.retrieve(0)
ll.deleteFromLocation(0)
ll.printList()
ll.printIsEmpty()
ll.printSize()
ll.reverseList()
ll.printList()
