Array.prototype.mymap2 = function (fn) {
  if (typeof fn != "function") {
    throw new Error("必须是一个函数");
  }
  const res = [];
  for (let i = 0; i < this.length - 1; i++) {
    res.push(fn(this[i]));
  }
  return res;
};
