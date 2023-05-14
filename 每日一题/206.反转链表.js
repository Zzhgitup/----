/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  let temp = null;
  while (cur) {
    //保存一下当前节点的下一个
    temp = cur.next;
    //反转
    cur.next = pre;
    //更新
    pre = cur;
    cur = temp;
  }
  return pre;
};
// @lc code=end
