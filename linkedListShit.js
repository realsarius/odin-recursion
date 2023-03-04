/* eslint-disable max-classes-per-file */

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

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }

      count += 1;
      current = current.next;
    }
    return null;
  }

  getHead() {
    return this.head.data;
  }

  getTail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;
    const arr = [];

    while (current) {
      console.log(current.data);
      arr.push(current.data);
      current = current.next;
    }
    // console.log(arr);
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      const node = this.head;
      this.head = null;
      this.size -= 1;
      return node.data;
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
}

const linkedList = new LinkedList();

linkedList.append(4);
linkedList.append(3);
linkedList.append(2);
linkedList.prepend(20);
linkedList.append(1);
linkedList.append(6);

// console.log(`Index: ${linkedList.getAt(0)}`);
// console.log(`Head: ${linkedList.getHead()}`);
// console.log(`Tail: ${linkedList.getTail()}`);
// console.log(`Size: ${linkedList.getSize()}`);
linkedList.printListData();

console.log(`Pop: ${linkedList.pop()}`);
