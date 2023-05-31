let url =
  "http://www.baidu.com?user=anoymous&id=12&&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
function ParseParams(url) {
  const paramsstr = url.split("?")[1];
  const paramsArr = paramsstr.split("&");
  let paramsobj = {};
  paramsArr.forEach((item) => {
    if (/=/.test(item)) {
      //处理有值的参数
      let [key, val] = item.split("="); //分割key和value;
      val = decodeURIComponent(val); //中文解码;
      val = /^\d+$/.test(val) ? parseInt(val) : val; //是否需要转化成数字
      if (paramsobj.hasOwnProperty(key)) {
        //看看是否有这个，如果已经有了，则创建一个数组，添加进去
        paramsobj[key] = [].concat(paramsobj[key], val);
      } else {
        paramsobj[key] = val;
      }
    } else {
      paramsobj[item] = true;
    }
  });
  return paramsobj;
}
console.log(ParseParams(url));
