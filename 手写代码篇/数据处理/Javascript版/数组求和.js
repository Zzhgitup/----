//数组求和  reduce
let arr = [1,2,3,4,5,6,7,8,9];
let num = arr.reduce((pre,curr)=>{
	return curr=pre+curr;
},0)
console.log(num);
//嵌套数组求和
let arr2 = [1,2,3,[[4,5],6],7,8,9];
let arrstr = arr2.toString().split(",").reduce((pre,curr)=>curr = pre+Number(curr),0);
console.log(arrstr);
//递归实现
let arr3 = [1,2,3,4,5,6,7,8,9];
function add(arr3) {
	if(arr3.length==1)return arr3[0];
	return arr3[0]+add(arr3.slice(1));
}
console.log(add(arr3));