(function () {
  //let  作用域
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  //闭包方法
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      (function (i) {
        console.log(i);
      })();
    }, i * 1000);
  }
})();
