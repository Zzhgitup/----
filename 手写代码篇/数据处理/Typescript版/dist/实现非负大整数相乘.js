(function () {
    function sumBigNumber(a, b) {
        if (isNaN(Number(a)) || isNaN(Number(b)))
            return 0;
        a = a.toString();
        b = b.toString();
        var len1 = a.length;
        var len2 = b.length;
        var pos = new Array(len1 + len2).fill(0);
        for (var j = len2 - 1; j >= 0; j--) {
            for (var i = len1 - 1; i >= 0; i--) {
                var index1 = i + j;
                var index2 = i + j + 1;
                var mul = Number(a[i]) * Number(b[j]) + (pos[index2] || 0);
                pos[index1] = Math.floor(mul / 10) + (pos[index1] || 0);
                pos[index2] = mul % 10;
            }
        }
        var result = pos.join("").replace(/^0+/g, "");
        return parseInt(result, 10);
    }
})();
