interface Array<T> {
  mymap(fn: (value: T, index: number, array: T[]) => any): any[];
}
Array.prototype.mymap = function (fn) {
  const res: any[] = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};
/* 
这里我们通过扩展 Array 接口，为数组添加了一个 mymap 方法。
该方法接受一个回调函数 fn 作为参数，该函数接受三个参数：当前元素的值 value、当前元素的索引 index 和当前数组 array。
该方法返回一个新数组，其中每个元素都是 fn 函数对应原数组元素的返回值。
在实现中，我们使用了 TypeScript 的泛型来定义数组元素类型，
并使用了箭头函数的语法来定义回调函数的类型。
同时，我们还在回调函数的参数列表中添加了索引和数组本身，以便在回调函数中访问它们。
*/
