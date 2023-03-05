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

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head.data;
  }

  getTail() {
    let current;

    if (!this.head.next) {
      return this.head;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current.data;
    }
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count += 1;
    }
    return 'Nothing found';
  }

  clearList() {
    this.head = null;
    this.size = 0;
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
      const node = this.head;
      this.head = null;
      this.size -= 1;
    }
    let current = this.head.next;
    let previous = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;

    this.size -= 1;
    return current.data;
  }

  contains(value) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return count;
      }
      count += 1;
      current = current.next;
    }
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

linkedList.printListData();
console.log(linkedList.toString());
