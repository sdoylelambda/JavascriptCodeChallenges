// node
class Node {
  constructor(element) {
    this.next = null
    this.element = element
  }
}
// sll
class LinkedList {
  constructor(node) {
    this.head = null
    this.size = 0
  }

  // add
  add(element) {
    var node = new Node(element)
    if (this.head == null) {
      this.head = node
      this.size += 1
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      this.size += 1
    }
  }

  insertAt(element, location) {
    var node = new Node(element)
    if (element > 0 && element > this.size) return -1
    var current = this.head
    var previous = current
    if (location === 0) {
      node.next = this.head
      this.head = node
    }
    node.next = current
    prev.next = node
  }

  // insertAt(element, index) {
  //   if (index > 0 && index > this.size) return false
  //   else {
  //     // creates a new node
  //     var node = new Node(element)
  //     var curr, prev

  //     curr = this.head

  //     // add the element to the
  //     // first index
  //     if (index == 0) {
  //       node.next = this.head
  //       this.head = node
  //     } else {
  //       curr = this.head
  //       var it = 0

  //       // iterate over the list to find
  //       // the position to insert
  //       while (it < index) {
  //         it++
  //         prev = curr
  //         curr = curr.next
  //       }

  //       // adding an element
  //       node.next = curr
  //       prev.next = node
  //     }
  //     this.size++
  //   }
  // }

  removeFrom(index) {
    if (index > 0 && index > this.size) return -1
    else {
      var curr,
        prev,
        it = 0
      curr = this.head
      prev = curr

      // deleting first element
      if (index === 0) {
        this.head = curr.next
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++
          prev = curr
          curr = curr.next
        }

        // remove the element
        prev.next = curr.next
      }
      this.size--

      // return the remove element
      return curr.element
    }
  }

  removeElement(element) {
    if (element > 0 && element > this.size) return -1
    else {
      var current = this.head
      var prev = current
      var it = 0
      // console.log('current', current)
      if (element === 0) {
        this.head = current.next
        // this.size -= 1
      } else {
        while (it < element) {
          it++
          prev = current
          current = current.next
        }
        prev.next = current.next
      }
      this.size--
      return current.element
    }
  }

  // print
  printList() {
    var str = ''
    var current = this.head
    while (current) {
      str += current.element + ' '
      current = current.next
    }
    console.log(str)
  }

  // size
  printSize() {
    console.log(this.size)
  }

  // isEmpty
  isEmpty() {
    if (this.size === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}

var ll = new LinkedList()

// ll.isEmpty()
// ll.add(5)
ll.add(10)
ll.add(11)
ll.printList()
ll.printSize()
// ll.isEmpty()
// // ll.removeFrom(200)
// ll.removeElement(1)
// ll.printList()
// ll.printSize()
ll.insertAt(2222, 2)
ll.printList()
ll.printSize()
