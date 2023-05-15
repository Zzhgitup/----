(() => {
  function foramt(n) {
    let str = n.toString();
    let decimals = ""; //储存小数部分
    //判断是否有小数  有的话 分割一下  没有的话 返回原始值
    str.indexOf(".") > -1 ? (decimals = str.split(".")[1]) : decimals;
    let len = str.length;
    /* 测试 */
    if (len < 3) {
      //如果长度小于3  则直接返回
      return str;
    } else {
      let temp = "";
      let remainder = len % 3;
      decimals ? (temp = "." + decimals) : temp;
      if (remainder != 0) {
        return (
          str.slice(0, remainder) +
          "," +
          str.slice(remainder, len).match(/\d{3}/g)?.join(",") +
          temp
        );
      } else {
        return str.slice(0, len).match(/d{d}/g)?.join(",");
      }
    }
  }
  console.log(foramt(123445.456895));
})();
