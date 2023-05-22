(function () {
    function foramt(n) {
        var _a, _b;
        var str = n.toString();
        var decimals = ""; //储存小数部分
        //判断是否有小数  有的话 分割一下  没有的话 返回原始值
        str.indexOf(".") > -1 ? (decimals = str.split(".")[1]) : decimals;
        var len = str.length;
        if (len < 3) {
            //如果长度小于3  则直接返回
            return str;
        }
        else {
            var temp = "";
            var remainder = len % 3;
            decimals ? (temp = "." + decimals) : temp;
            if (remainder != 0) {
                return (str.slice(0, remainder) +
                    "," + ((_a = str.slice(remainder, len).match(/\d{3}/g)) === null || _a === void 0 ? void 0 : _a.join(",")) +
                    temp);
            }
            else {
                return (_b = str.slice(0, len).match(/d{d}/g)) === null || _b === void 0 ? void 0 : _b.join(",");
            }
        }
    }
    console.log(foramt(123445.456895));
    var a = 1 + 1;
})();
