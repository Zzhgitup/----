let array = [1,1,1,1,1,4,4,5,6,7,8,9];
let newarray  = Array.from(new Set(array));
console.log(newarray);

function quchong(arr) {
	let map  = {};
	let res =  [];
	for(let i =0;i<arr.length;i++){
		if(!map.hasOwnProperty(arr[i])){
			map[arr[i]] = arr[i];
			res.push(arr[i]);
		}
	}
	return res;
}
console.log(quchong(array));