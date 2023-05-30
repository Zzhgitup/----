/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curA = headA,
    curB = headB;
  let lenA = 0;
  let lenB = 0;
  while (headA.next) {
    //统计A，B链表的长度
    headA = headA.next;
    lenA++;
  }
  while (headB.next) {
    headB = headB.next;
    lenB++;
  }
  //设A为较长的那个链表
  if (lenA < lenB) {
    //交换头节点和长度
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  //尾部对齐
  let topmove = lenA - lenB;
  while (topmove--) {
    curA = curA.next;
  }
  //交换完成，开始对比
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  //返回交点
  return curA;
};
