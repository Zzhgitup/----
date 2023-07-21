(() => {
  function mysetInterval(fn: () => void, defer: number) {
    const timer = {
      flag: true,
    };
    //设置递归函数
    function interval() {
      if (timer.flag) {
        fn();
      }
      setTimeout(interval, defer);
    }
    setTimeout(interval, defer); //初始化执行
    return timer;
  }
  mysetInterval(() => {
    console.log("123");
  }, 500);
})();
