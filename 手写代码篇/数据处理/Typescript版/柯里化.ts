//实现add(1)(2)(3);
//第一种粗暴解决;
(function () {
  function add(a: any) {
    return function (b: any) {
      return function (c: any) {
        return a + b + c;
      };
    };
  }
  console.log(add(1)(2)(3));

  //参数长度固定的方案 1
  var add2 = function (m: any) {
    var temp = function (n: any) {
      return add2(m + n);
    };
    temp.toString = function () {
      return m;
    };
    return temp;
  };
  console.log(add2(1)(2)(3));
  //参数不固定的方案
  function add3(...args: any[]) {
    //累积函数
    return args.reduce((a, b) => a + b);
  }
  function currying(fn: any) {
    let args: any[] = [];
    return function temp(...newArgs: any[]) {
      if (newArgs.length) {
        args = [...args, ...newArgs];
        return temp;
      } else {
        let val = fn.apply(this, args);
        args = [];
        return val;
      }
    };
  }

  let addcurry = currying(add3);
  console.log(addcurry(1)(2)(4, 5));
})();
