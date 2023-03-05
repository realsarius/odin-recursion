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
    const sortedTree = [...new Set(data)].sort((a, b) => a - b);
    return sortedTree;
  }

  buildTree(data) {
    const sortedTree = this.sortedTree(data);

    const buildSubtree = (sortedTree, start, end) => {
      if (start > end) {
        return null;
      }
      const mid = Math.floor((start + end) / 2);
      const node = new Node(sortedTree[mid]);

      node.left = buildSubtree(sortedTree, start, mid - 1);
      node.right = buildSubtree(sortedTree, mid + 1, end);

      this.root = node;
      return node;
    };
    return buildSubtree(sortedTree, 0, sortedTree.length - 1);
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
