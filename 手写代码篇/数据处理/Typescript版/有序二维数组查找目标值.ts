(function () {
  function FindNumber2DArray(matrix: [][], target: number) {
    if (matrix.length == 0 || matrix == null) return false;
    let row = 0; //高度,
    let column = matrix[0].length - 1; //宽度
    while (row < matrix.length && column >= 0) {
      if (matrix[row][column] === target) {
        return true;
      } else if (matrix[row][column] > target) {
        column--;
      } else {
        row++;
      }
    }
    return false;
  }
})();
