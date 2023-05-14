let date1 = new Date('2020-6-01');
console.log(date1);
console.log(dataformat(date1,"yyyy年MM月dd日"));
function dataformat(date,strmodel) {
	let day = date.getDate()<9?'0'+date.getDate():date.getDate();//获取天数
	let month = (date.getMonth()+1)<9? '0'+(date.getMonth()+1):(date.getMonth()+1)//获取月数
	let year = date.getFullYear();//获取年份
	let c= strmodel.replace("yyyy",year).replace("MM",month).replace("dd",day);
	return  c;
}