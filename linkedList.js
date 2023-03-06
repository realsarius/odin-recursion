class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  append(data) {
    const node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  getHead() {
    return this.head.data;
  }

  getTail() {
    let current;
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return this.head;
    }
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;
    if (!this.head) {
      return null;
    }
    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count += 1;
    }
    return null;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      let current = this.head;
      this.head = null;
      this.size = 0;
      return current.data;
    }
    let previous = this.head;
    let current = this.head.next;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size -= 1;

    return current.data;
  }

  toString() {
    if (!this.head) {
      return null;
    }
    let string = '';
    let current = this.head;
    while (current) {
      string += `( ${current.data} ) -> `;
      current = current.next;
    }
    string += 'null';
    return string;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count += 1;
    }

    node.next = current;
    previous.next = node;

    this.size += 1;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size -= 1;
  }

  getSize() {
    return this.size;
  }
}

const linkedList = new LinkedList();

linkedList.append(4);
linkedList.append(3);
linkedList.append(2);
linkedList.prepend(20);
linkedList.append(1);
linkedList.append(6);

console.log(`Index: ${linkedList.getAt(1)}`);
console.log(`Head: ${linkedList.getHead()}`);
console.log(`Tail: ${linkedList.getTail()}`);
// console.log(`Size: ${linkedList.getSize()}`);
// console.log(`Contains: ${linkedList.contains(6)}`);
// console.log(`Find at: ${linkedList.find(2)}`);
// console.log(`Pop: ${linkedList.pop()}`);

linkedList.insertAt(5, 2);
// linkedList.removeAt(5);

// linkedList.printListData();
console.log(linkedList.toString());
