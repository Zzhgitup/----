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
  //第一种方法，就是定时器+递归
  const step = (timer: number, ligth: string, back: Function) => {
    setTimeout(() => {
      if (ligth == "red") red();
      else if (ligth == "green") green();
      else yellow();
    }, timer);
  };
  const dich = () => {
    step(3000, "red", () => {
      step(2000, "green", () => {
        step(1000, "yellow", () => {
          dich();
        });
      });
    });
  };
  //---------------------------------------------------------------

  //第二种方法 promise
  const step2 = (timer: number, light: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (light == "red") red();
        else if (light == "green") green();
        else yellow();
        resolve();
      }, timer);
    });
  };
  const dich2 = () => {
    step2(3000, "red").then(() => {
      step2(2000, "green").then(() => {
        step2(1000, "yellow").then(dich2);
      });
    });
  };
  //---------------------------------------------------

  //第三种方法 await
  const step3 = async () => {
    await step2(3000, "red");
    await step2(2000, "green");
    await step2(1000, "yellow");
    step3();
  };
  step3();
})();
