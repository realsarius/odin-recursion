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
      return this.root;
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

  remove(data) {
    const removeNode = function (node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (node.left && node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        var tempNode = node.right;
        while (!tempNode.left) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  height() {
    const height = (node) => {
      if (!node) {
        return 0;
      }
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      if (
        Math.abs(leftHeight - rightHeight) > 1 ||
        leftHeight === -1 ||
        rightHeight === -1
      ) {
        return -1;
      } else {
        return Math.max(leftHeight, rightHeight) + 1;
      }
    };
    return height(this.root) !== -1;
  }

  isBalanced() {
    const balanced = (node) => {
      if (!node) {
        return 0;
      }
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      if (
        Math.abs(leftHeight - rightHeight) > 1 ||
        leftHeight === -1 ||
        rightHeight === -1
      ) {
        return -1;
      } else {
        return Math.max(leftHeight, rightHeight) + 1;
      }
    };
    return balanced(this.root) !== -1;
  }

  find(data) {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (data !== current.data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current.data;
  }

  levelOrder(callback) {
    if (!this.root) {
      return null;
    }

    const result = [];
    const queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.data);
      if (callback) callback(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  preOrder(callback, result = []) {
    if (!this.root) {
      return null;
    } else {
      const traverse = (node) => {
        if (!node) {
          return;
        }
        // callback(node.data);

        result.push(node.data);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
    }
    return result;
  }

  inOrder(callback, result = []) {
    if (!this.root) {
      return null;
    } else {
      const traverse = (node) => {
        if (!node) {
          return;
        }
        // callback(node.data);

        if (node.left) traverse(node.left);
        result.push(node.data);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
    }
    return result;
  }

  postOrder(callback, result = []) {
    if (!this.root) {
      return null;
    } else {
      const traverse = (node) => {
        if (!node) {
          return;
        }
        // callback(node.data);

        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.data);
      };
      traverse(this.root);
    }
    return result;
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
tree.insert(100);
tree.insert(0);
// tree.delete(100);
// tree.delete(6345);
tree.insert(6);
tree.insert(6);
tree.insert(6);

console.log(`Finds: ${tree.find(100)}`);

console.log(`Level Order: ${tree.levelOrder()}`);
console.log(`Preorder: ${tree.preOrder()}`);
console.log(`Inorder: ${tree.inOrder()}`);
console.log(`Postorder: ${tree.postOrder()}`);
console.log(`Is Balanced: ${tree.isBalanced()}`);
// console.log(`Preorder: ${tree.preOrder((data) => console.log(data))}`);
// console.log(`Inorder: ${tree.inOrder((data) => console.log(data))}`);
// console.log(`Postorder: ${tree.postOrder((data) => console.log(data))}`);
tree.remove(6);

tree.prettyPrint();
