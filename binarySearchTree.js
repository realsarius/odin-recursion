class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  sortedTree(data) {
    return [...new Set(data)].sort((a, b) => a - b);
  }

  buildSubtree(sortedTree, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(sortedTree[mid]);

    node.left = this.buildSubtree(sortedTree, start, mid - 1);
    node.right = this.buildSubtree(sortedTree, mid + 1, end);

    this.root = node;
    return node;
  }

  buildTree(data) {
    const sortedTree = this.sortedTree(data);

    return this.buildSubtree(sortedTree, 0, sortedTree.length - 1);
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (data === current.data) {
        return undefined;
      }

      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          return this;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }

        current = current.right;
      }
    }
  }

  prettyPrint() {
    const prettyPrint = (node, prefix = '', isLeft = true) => {
      if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      }
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      }
    };
    prettyPrint(this.root);
  }
}

const tree = new BinarySearchTree();
console.log(tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));

tree.prettyPrint();
