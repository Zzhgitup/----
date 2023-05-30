var result = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
];
function jsonTree(data) {
  var result = [];
  if (!Array.isArray(data)) {
    return result;
  }
  var map = {};
  data.forEach(function (item) {
    map[item.id] = item;
  });
  data.forEach(function (item) {
    var parent = map[item.pid];
    if (parent) {
      (parent.childern || (parent.childern = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
jsonTree(result);
console.log(jsonTree(result));
