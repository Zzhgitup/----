(function () {
  //初始化结果数组，并判断输入数据的格式
  interface Iresult {
    id: number;
    pid: number;
    name: string;
  }
  let result = [
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
  function jsonTree(data: Iresult[]) {
    let result: any[] = [];
    if (!Array.isArray(data)) {
      return result;
    }
    let map: any = {};
    data.forEach((item) => {
      map[item.id] = item;
    });
    data.forEach((item) => {
      let parent = map[item.pid];
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
})();
