Array.prototype.mymap=function(fn) {
	if(typeof fn !=="function"){
		throw new Error("参数必须是一个函数");
	}
	const res = [];
	for(let i =0;i<this.length;i++){
		res.push(fn(this[i]));
	}
	return res;
}	