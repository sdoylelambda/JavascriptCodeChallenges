class Node {
  constructor(element) {
    this.next = null
    this.element = element
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addNode(element) {
    const newNode = new Node(element)
    var cur = this.head
    if (this.head === null) {
      this.head = newNode
    } 
    else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = newNode
      this.size++
    }
  }

  findNthNode(findNode) {
    var count = 1
    var cur = this.head
    while (findNode > count){
      count++
      cur = cur.next
    }  
    console.log(`Node at position ${findNode} =`, cur.element)
    return cur
  }

  removeNode(findNode) {
    var count = 1
    var cur = this.head
    var prev = cur
    while (findNode > count){
      count++
      prev = cur
      cur = cur.next
    }  
    prev.next = cur.next 
    console.log(`Node at position ${findNode} with element: ${cur.element} has been deleted.`)
    
  }

  printList() {
    var str = ''
    var cur = this.head
    while (cur) {
      str += cur.element + ' '
      cur = cur.next
    }
    console.log('complete list:', str)
  }
}

const sll = new SinglyLinkedList()

sll.addNode(4)
sll.addNode(22)
sll.addNode(52)
sll.addNode(32)
sll.addNode(72)
sll.printList()
sll.findNthNode(4)
sll.removeNode(1)
sll.printList()


