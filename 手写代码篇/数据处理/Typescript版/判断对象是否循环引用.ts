/* 
这段代码是一个用于检测对象是否存在循环引用的函数。函数名为`isCyleObject`，它接受两个参数：`obj`和`parent`。

函数首先创建一个名为`parentArr`的变量，它存储了`parent`参数的值，如果`parent`为`null`或者`undefined`，则默认将`obj`放入`parentArr`的数组中。

接下来，函数使用`for...in`循环遍历了`obj`对象的属性。在遍历过程中，函数首先判断当前属性的值是否为对象类型。如果是对象类型，则通过遍历`parentArr`数组来检查是否存在循环引用。如果存在循环引用，则将一个布尔值标记为`true`，并立即返回`true`。

如果不存在循环引用，函数递归调用`isCyleObject`函数来继续检查当前属性值是否存在循环引用。递归调用时，将当前属性值加入到`parentArr`数组中，然后进行判断。如果存在循环引用，则返回`true`。

最后，如果遍历过程中没有发现循环引用，则返回`false`，表示不存在循环引用。

总的来说，这段代码是一个递归函数，用于检测一个对象是否存在循环引用。
*/
(() => {
  const isCycleObject = (obj: any, parent?: any[]): boolean => {
    let parentArr = parent || [obj];
    for (let i in obj) {
      if (typeof obj[i] == "object") {
        let flag = false;
        parentArr.forEach((element: any) => {
          if (element == obj[i]) {
            flag = true;
          }
        });
        if (flag) return true;
        flag = isCycleObject(obj[i], [...parentArr, obj[i]]);
        if (flag) return true;
      }
    }
    return false;
  };
  const isCycleObject2 = (obj: any, parent?: any[]): boolean => {
    let parentArr = parent || [];
    for (let i in obj) {
      if (typeof obj[i] == "object") {
        let flag = false;
        parentArr.forEach((element) => {
          if (element == obj[i]) {
            flag = true;
          }
        });
        if (flag) return true;
        flag = isCycleObject2(obj[i], [obj[i], ...parentArr]);
        if (flag) return true;
      }
    }
    return false;
  };
})();
