//参数求和
function sum() {
  let num = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    num += item * 1;
  });
  return num;
}
//ES6版本的
function sum2(...nums: any[]) {
  let sum = 0;
  nums.forEach((item) => {
    sum += item * 1;
  });
  return sum;
}
