let str="";

process.stdin.on("readable",function(){
    let chunk=process.stdin.read();
    if(chunk) buf+=chunk.toString();
});
process.stdin.on("end",function(){
	let k=0;
	let newstr = ''
	function dfs() {
		if(str[k]=="#"){
			k++;
			return;
		}
		let r = str[k++];//根节点
		dfs();//遍历左子树
		newstr+=`${r} `;
		dfs();//遍历右子树
	}
	dfs();
	console.log(newstr);
});
