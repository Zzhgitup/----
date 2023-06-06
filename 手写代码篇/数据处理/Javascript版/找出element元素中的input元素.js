function findAllinputelement(element) {
  var rec = function (element, arr) {
    if (element.nodeName.toUpperCase() == "INPUT") {
      arr.push(element);
    }
    var children = element.childNodes;
    children.forEach(function (element) {
      rec(element, arr);
    });
    return arr;
  };
  return rec(element, []);
}
// 测试案例
var container = document.createElement("div");
container.innerHTML =
  '\n  <input type="text" name="input1" />\n  <div>\n    <input type="text" name="input2" />\n    <input type="text" name="input3" />\n  </div>\n';
var inputElements = findAllinputelement(container);
// 断言
if (inputElements.length !== 3) {
  console.error("期望找到3个输入元素，但实际找到", inputElements.length);
} else {
  console.log("所有测试案例通过");
  console.log(inputElements);
}
