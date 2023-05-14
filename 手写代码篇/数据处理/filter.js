//是数组的filter 方法
Array.prototype.myfilter=function(fn) {
	if(typeof fn !=="function"){
		throw new Error("请输入一个函数");
	}
	const res = [];
	for(let i =0;i<this.length;i++){
		fn(this[i]) && res.push(this[i]);
	}
	return res;
}