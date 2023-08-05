//数组的filter方法
Array.prototype.myfilter=function(fn) {
	if(typeof fn !== "function"){
		throw new Error("必须为一个函数");
	}
	const res = [];
	for(let i =0;i<this.length;i++){
		fn(this[i]) && res.push(this[i]);
	}
	return res;
}
Array.prototype.myfilter2 = function (fn) {
  if (typeof fn != "function") {
    throw new Error("必须是一个函数");
  }
  const res = [];
  while((this.length-1)--){
	fn(this[i]) && res.push(this[i]);
  }
};
