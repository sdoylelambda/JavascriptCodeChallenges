// node class
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// linked list class
class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  add(element) {
    // creates a new node
    var node = new Node(element)

    // to store current node
    var current

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node
    else {
      current = this.head

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next
      }

      // add node
      current.next = node
    }
    this.size++
  }

  insertAt(element, index) {
    if (index > 0 && index > this.size) {
      return false
    } else {
      const node = new Node(element)
      var current = this.head
      var previous

      if (index === 0) {
        node.next = this.head
        this.head = node
      } else {
        current = this.head
        var it = 0
        while (it < index) {
          it++
          prev = curr
          curr = curr.next
        }
        node.next = current
        previous.next = node
      }
      this.size++
    }
  }

  // removeFrom(location)
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
        //edited
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

  // removeFrom

  removeElement(element) {
    var current = this.head
    var prev = null

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        this.size--
        return current.element
      }
      prev = current
      current = current.next
    }
    return -1
  }

  // Helper Methods

  indexOf(index) {
    pass
  }

  isEmpty() {
    var empty = this.size
    if (empty === 0) {
      console.log('empty')
      return empty
    } else {
      console.log('not empty')
    }
  }

  size_of_list() {
    const size = this.size
    console.log(size)
    return size
  }

  printList() {
    var str = ''
    var current = this.head
    while (current) {
      str += current.element + ' '
      current = current.next
    }
    console.log(str)
  }
}

// Code Challenge
function removeKthLinkedListNode(head, k) {
  console.log('head::::', head.next)
  var current = head.element
  var next = current.next
  // go next k times
  if (k === 0) {
    ll.removeElement(k)
  }
}

var ll = new LinkedList()
ll.isEmpty()
ll.add(1250)
ll.add(1350)
ll.add(1450)
ll.printList()
ll.size_of_list()
ll.isEmpty()
ll.removeFrom(1)
ll.printList()
removeKthLinkedListNode(ll.head, 0)
ll.printList()
