// 在 String 原型上实现 _reverse 方法
String.prototype._reverse = function () {
    // 使用 split 将字符串转换为字符数组，然后使用 reverse 反转数组，最后使用 join 将字符数组转换回字符串
    return this.split("").reverse().join("");
};
// 主程序
var str = "hellow";
var reversedStr = str._reverse();
console.log(reversedStr);
