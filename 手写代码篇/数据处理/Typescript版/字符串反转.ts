// 扩展 String 类型的接口，添加自定义方法 _reverse
interface String {
  _reverse(): string;
}

// 在 String 原型上实现 _reverse 方法
String.prototype._reverse = function (): string {
  // 使用 split 将字符串转换为字符数组，然后使用 reverse 反转数组，最后使用 join 将字符数组转换回字符串
  return this.split("").reverse().join("");
};

// 主程序
const str: string = "hellow";
const reversedStr: string = str._reverse();
console.log(reversedStr);
