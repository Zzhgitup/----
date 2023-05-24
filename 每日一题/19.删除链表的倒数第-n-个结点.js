/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let ret = new ListNode(0, head);
  let slow = ret;
  let fast = ret;
  while (n--) {
    //先移快指针
    fast = fast.next;
  }
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  let temp = slow.next.next;
  slow.next = temp;
  return ret.next;
};
// @lc code=end
