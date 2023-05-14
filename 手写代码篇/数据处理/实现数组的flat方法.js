//flat() 方法创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中。
function _flat(arr,depth) {
	if(!Array.isArray(arr)||depth<=0){
		return arr;
	}
	return arr.reduce((prev,curr)=>{
		if(Array.isArray(curr)){
			return prev.concat(_flat(curr,depth-1));
		}else{
			return prev.concat(curr);
		}
	},[])
}

let cr = [1,2,3,4,5,[[[[5,6]]]]];
console.log(_flat(cr,2));