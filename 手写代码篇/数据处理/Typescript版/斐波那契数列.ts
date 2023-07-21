/**
 *
 * @param n 斐波那契数列上限
 * @returns
 */
function fn(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fn(n - 2) + fn(n - 1);
}
//区间优化
function fiboacci2(n: number): number {
  const arr = [1, 1, 2];
  const arrlen = arr.length;
  if (n <= arrlen) {
    return arr[n];
  }
  for (let i = arrlen; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[arr.length - 1];
}
//非递归优化
function fn2(n: number): number {
  let pre1 = 1;
  let pre2 = 1;
  let current = 2;
  if (n <= 2) {
    return current;
  }
  for (let i = 2; i < n; i++) {
    pre1 = pre2;
    pre2 = current;
    current = pre2 + pre1;
  }
  return current;
}
