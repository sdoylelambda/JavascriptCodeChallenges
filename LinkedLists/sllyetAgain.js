class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class SLL {
  constructor() {
    this.head = null
    this.count = 0
  }

  addNode(element) {
    const node = new Node(element)
    const cur = this.head
    if (cur === null) {
      this.head = node
    } else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.count++
  }
  isEmpty() {
    if (this.head === null || this.count === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
  printSize() {
    console.log(this.count)
  }

  printList() {
    var cur = this.head
    var str = ''
    while (cur) {
      str += cur.element
      cur = cur.next
    }
    console.log(cur)
  }
}

const ll = new SLL()
ll.printList()
ll.printSize()
ll.isEmpty()
ll.addNode(5)
ll.isEmpty()
// ll.addNode(5)
ll.printList()
ll.printSize()
