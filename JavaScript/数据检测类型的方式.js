//typeof
console.log(typeof 2); // number
console.log(typeof "2"); //string
console.log(typeof []); //object
console.log(typeof true); //boolean
console.log(typeof function () {}); //function
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof {}); //object
//instanceof
console.log(2 instanceof Number); //false
console.log(true instanceof Boolean); //false
console.log("str" instanceof String); //false

console.log([] instanceof Array); //true
console.log({} instanceof Object); //true
console.log(function () {} instanceof Function); //true
//constructor
console.log((2).constructor == Number);
console.log(true.constructor == Boolean);
console.log("str".constructor == String);
console.info([].constructor == Array);
console.log({}.constructor == Object);
console.log(function () {}.constructor == Function);
//Object.prototype.toString.call()
(() => {
  const a = Object.prototype.toString;
  console.log(a.call(2));
  console.log(a.call("stirng"));
  console.log(a.call(true));
  console.log(a.call(undefined));
  console.log(a.call([]));
  console.log(a.call({}));
  console.log(a.call(function () {}));
  console.log(a.call(null));
  /* 
[object Number]
[object String]
[object Boolean]
[object Undefined]
[object Array]
[object Object]
[object Function]
[object Null] 
  */
})();
const obj1 = [];
//1. 方式
Object.prototype.toString.call(obj1).slice(8, -1);
//2. 通过原型链
obj1.__proto__ === Array.prototype;
//3. 通过Array，isArray
Array.isArray(obj1);
//通过instanceof
console.log(obj1 instanceof Array);
//通过
console.log(Array.prototype.isPrototypeOf(obj1));
