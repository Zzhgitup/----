//实现add(1)(2)(3);
//第一种粗暴解决;
(function () {
  function add(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  console.log(add(1)(2)(3));
  //参数长度固定的方案 1
  var add2 = function (m) {
    var temp = function (n) {
      return add2(m + n);
    };
    temp.toString = function () {
      return m;
    };
    return temp;
  };
  console.log(add2(1)(2)(3));
})();
