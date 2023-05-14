//实现字符串的repeat
interface myrepeat2 {
  (str: string, n: number): any;
}
let letsmyrepeat: myrepeat2;
letsmyrepeat = function (str, n) {
  return new Array(n + 1).join(str);
};
function myrepeat(str: string, n: number) {
  return new Array(n + 1).join(str);
}
console.log(letsmyrepeat("abc", 2));
