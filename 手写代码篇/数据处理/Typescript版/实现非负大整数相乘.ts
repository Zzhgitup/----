(function () {
  function sumBigNumber(a: number | string, b: number | string): number {
    if (isNaN(Number(a)) || isNaN(Number(b))) return 0;
    a = a.toString();
    b = b.toString();
    const len1: number = a.length;
    const len2: number = b.length;
    const pos: number[] = new Array(len1 + len2).fill(0);
    for (let j: number = len2 - 1; j >= 0; j--) {
      for (let i: number = len1 - 1; i >= 0; i--) {
        const index1: number = i + j;
        const index2: number = i + j + 1;
        const mul: number = Number(a[i]) * Number(b[j]) + (pos[index2] || 0);
        pos[index1] = Math.floor(mul / 10) + (pos[index1] || 0);
        pos[index2] = mul % 10;
      }
    }

    const result: string = pos.join("").replace(/^0+/g, "");
    return parseInt(result, 10);
  }
})();
