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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 대칭한 트리인지 확인을 하는 함수
  const isSymmetric = (leftSub, rightSub) => {
    if (!leftSub && !rightSub) return true
    if (leftSub === null || rightSub === null) return false

    return (
      leftSub.val === rightSub.val &&
      isSymmetric(leftSub.right, rightSub.left) &&
      isSymmetric(leftSub.left, rightSub.right)
    )
  }

  const leftSub = root.left
  const rightSub = root.right

  return isSymmetric(leftSub, rightSub)
}
