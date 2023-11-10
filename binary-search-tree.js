class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // create a new node to insert
    const newNode = new Node(val)
    // start at the root
    // check if root exists - if not, the root becomes the new node
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root
    // if there is a root, check if value of new node is greater or less than root
    while (true) {
      // prevent duplicate values from being inserted
      if (val === current.val) return undefined
      // if less than
      // check if there is a left node
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        // if greater check if a right node exists
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    function recursiveInsertHelper(node, newNode) {
      if (newNode.val < node.val) {
        if (node.left === null) {
          node.left = newNode
          return
        } else {
          recursiveInsertHelper(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
          return
        } else {
          recursiveInsertHelper(node.right, newNode)
        }
      }
    }

    const newNode = new Node(val)

    if (this.root === null) {
      this.root = newNode
    } else {
      recursiveInsertHelper(this.root, newNode)
    }
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    if (this.root === null) {
      return undefined
    }

    let stack = []
    let current = this.root

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }

      current = stack.pop()

      if (val === current.val) {
        return current
      }

      current = current.right
    }

    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findRecursivelyHelper(node, val) {
      if (node === null || val === node.val) return node

      if (val < node.val) {
        if (node.left) {
          return findRecursivelyHelper(node.left, val)
        } else {
          return undefined
        }
      } else {
        if (node.right) {
          return findRecursivelyHelper(node.right, val)
        } else {
          return undefined
        }
      }
    }
    // check if the first node in tree exists
    if (this.root === null) {
      return undefined
    }

    return findRecursivelyHelper(this.root, val)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const values = []
    let current = this.root
    // define a function called traverse that takes in a node
    function traverse(node) {
      // push the value of the node into the array
      values.push(node.val)
      // go left as long as long as there is a left node
      if (node.left) {
        traverse(node.left)
      }
      // go right as long as there is a right node
      if (node.right) {
        traverse(node.right)
      }
    }
    // traverse starting at the current node
    traverse(current)
    return values
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    // first visit the left subtree
    // then visit the current node
    // then visit the right subtree
    const values = []
    let current = this.root
    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }

      values.push(node.val)

      if (node.right) {
        traverse(node.right)
      }
    }
    traverse(current)
    return values
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const values = []
    let current = this.root

    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
      values.push(node.val)
    }
    traverse(current)
    return values
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let queue = [node]
    let values = []

    while (queue.length) {
      node = queue.shift()
      values.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    return values
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree
