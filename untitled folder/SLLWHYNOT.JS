class Node {
  constructor(element)
  this.element = element
  this.next = next
}

class SLL {
  constructor() {
  this.head = null
  this.size = 0
  }

  printList() {
    var str = ''
    var cur = this.head
    while (cur) {
      str += cur.element + ", "
    }
    console.log(str);
  }

}

sll = new SLL()

sll.printList()

