//主要实现思路
/* 取出数组的第一个元素，与后面随机的一个数进行交换，
    取出第二个元素，与除了索引为1的随即元素及进行交换，
    ~~~~~~一直交换到最后一个
*/
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function suijiarr(params) {
    var _a;
    for (var i = 0; i < params.length; i++) {
        var randomindex = Math.round(Math.random() * (params.length - 1 - i)) + i; //产生随机索引
        _a = [params[randomindex], params[i]], params[i] = _a[0], params[randomindex] = _a[1]; //交换元素
    }
}
suijiarr(arr);
console.log(arr);
//第二种方法
function daoxu(params) {
    var length = params.length;
    var randomindex;
    var temp;
    while (length) {
        randomindex = Math.floor(Math.random() * length - 1);
        temp = params[length];
        params[length] = params[randomindex];
        params[randomindex] = temp;
    }
}
daoxu(arr);
/* console.log("测试",arr); */ 
