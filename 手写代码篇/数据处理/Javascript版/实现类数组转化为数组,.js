//实现类数组转化为数组,

//1.通过call调用数组得slice方法来实现转化
/* 
slice() 方法返回一个新的数组对象，
这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end），
其中 start 和 end 代表了数组元素的索引。原始数组不会被改变。
*/
let arraylike = [];
Array.prototype.slice.call(arraylike); //没有参数。等同于截取全部

Array.prototype.splice.call(arraylike, 0);

Array.prototype.concat.call([], arraylike);

Array.from(arraylike);
