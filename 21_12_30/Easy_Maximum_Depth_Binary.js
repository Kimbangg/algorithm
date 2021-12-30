/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 재귀함수를 통한 깊이탐색
var maxDepth = function (root) {
  if (root === undefined || root === null) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// 재귀함수 => 직관적인 코드
var maxDepth = function (root) {
  const searchDepth = (root, level) => {
    if (!root) return level

    return Math.max(searchDepth(root.left, level + 1), searchDepth(root.right, level + 1))
  }

  return searchDepth(root, 0)
}

// bfs를 통한 깊이 탐색
var maxDepth = function (root) {
  if (!root) return 0
  const queue = [root]
  let depth = 0
  while (queue.length !== 0) {
    depth += 1
    const len = queue.length

    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left)
      if (queue[i].right) queue.push(queue[i].right)
    }

    queue.splice(0, len)
  }
  return depth
}
