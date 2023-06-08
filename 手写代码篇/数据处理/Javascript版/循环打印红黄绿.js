(function () {
  function red() {
    console.log("红灯");
  }
  function green() {
    console.log("绿灯");
  }
  function yellow() {
    console.log("黄灯");
  }
  const task = (timer, light, callback) => {
    setTimeout(() => {
      if (light == "red") {
        red();
      } else if (light == "green") {
        green();
      } else {
        yellow();
      }
      callback();
    }, timer);
  };
  task(3000, "red", () => {
    task(2000, "yellow", () => {
      task(1000, "yellow", () => {
        Function.prototype;
      });
    });
  });
  //这个代码只完成了一次循环

  //改成递归调用，返回执行
  const step = () => {
    task(3000, "red", () => {
      task(2000, "yellow", () => {
        task(1000, "yellow", () => {
          step();
        });
      });
    });
  };

  //使用promise实现
  const setp2 = (timer, ligth) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ligth == "red") red();
        else if (ligth == "green") green();
        else yellow();
        resolve();
      }, timer);
    });
  };
  const setp2task = () => {
    setp2(3000, "red").then(() => {
      setp2(2000, "green")
        .then(() => {
          setp2(1000, "yellow");
        })
        .then(setp2task);
    });
  };

  //使用await async实现

  const step3 = async () => {
    await setp2(3000, "red");
    await setp2(2000, "green");
    await setp2(1000, "yellow");
    step3();
  };
  step3();
})();
