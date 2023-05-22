/*
    如果想要对一个超大的证书，进行运算  但又想输出一般形式，那么使用+ 是无法达到的
    一旦数组超过，Number.Max_SAFE_INTEGER 数字会被立即转化成科学计数法
    并且数字精度相比之前会有误差
*/
function sumBigNumber2(a, b) {
    var res = ""; //暂存结果
    var temp = 0;
    var a1 = a.split("");
    var b1 = b.split("");
    while (a1.length || b1.length || temp) {
        temp += ~~a1.pop() + ~~b1.pop(); //进行每一位相加
        res = (temp % 10) + res; //如果大与10 则取余数 ，加到当前位
        temp = Math.floor(temp / 10); //保留进位数字，加到下一位
    }
    return res.replace(/^0+/, ""); //正则匹配前方的0，进行替换
}
