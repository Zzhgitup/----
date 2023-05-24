//应对多个参数的情况
/* 
这段代码定义了两个函数，一个是add函数，它会接收任意数量的参数，并返回它们的总和。
另一个函数是curring函数，它接收一个函数作为参数，并返回一个新的函数。
这个新的函数可以通过多次调用来逐步地传递参数，直到所有参数都被传递完毕，
最后返回原始函数的计算结果。
具体地说，这个curring函数会返回一个内部函数temp，该函数会接收任意数量的参数。
如果这个函数被传递了参数，那么这些参数会被添加到一个数组args中，然后返回temp本身，
以便继续传递参数。如果没有传递参数，那么temp函数将使用apply方法调用原始函数，
并将之前收集到的参数作为参数传递给它。然后，args数组将被重置为空数组，以便下一次调用temp函数。
最后，我们使用curring函数将add函数转换为一个可柯里化的函数addcurry，
这样我们就可以通过多次调用addcurry来逐步传递参数，直到最后计算出总和。例如，我们可以这样使用它：
*/
(function () {
  function add(...args) {
    // 求和函数
    return args.reduce((a, b) => a + b);
  }
  function curring(fn) {
    let args = []; //用来存储所有的参数
    return function temp(...newArgs) {
      if (newArgs.length) {
        args = [...args, ...newArgs]; //将老参数和新参数合并
        return temp; //再次返回函数
      } else {
        //若没有传入，则执行最终步骤，相加
        let val = fn.apply(this, args); //改变fn this指向，把参数相加
        args = []; //清空缓存
        return val; //返回目标值
      }
    };
  }
  const addcurry = curring(add);
  addcurry(1)(2)(3)(4)(); // 输出 10
  /* 在这个例子中，我们首先调用addcurry(1)，它返回一个新的函数，
  我们可以继续将参数2传递给它，以此类推。最后，我们调用addcurry()
  它不传递任何参数，所以temp函数将计算之前所有收集到的参数的总和，
  并返回结果10。 */
})();

(function () {
  function add(...args) {
    // 求和函数
    return args.reduce((a, b) => a + b);
  }
  function currying(fn) {
    let arges = [];
    return function temp(newArges) {
      if (newArges.length) {
        arges = [...newArges, ...arges];
        return temp;
      } else {
        let val = fn.apply(this, arges);
        arges = [];
        return val;
      }
    };
  }
  const addcurrying = currying(add);
  console.log("2", addcurrying(1)(2)(3)());
})();
