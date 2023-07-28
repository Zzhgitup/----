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

  function MocksetTime(fn: () => void, defer: number) {
    const timer = {
      flag: true,
    };
    function simulation() {
      if (timer.flag) {
        fn();
        setTimeout(simulation, defer);
      }
    }
    simulation();
    return timer; //返回控制器
  }
  MocksetTime(() => {
    console.log(123);
  }, 1000);
})();
