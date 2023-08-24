class MydomElement {
  tag: string;
  children: MydomElement[];
  constructor() {
    this.children = [];
    this.tag = "";
  }
  addchildren = (chile: MydomElement) => {
    this.children.push(chile);
  };
  [Symbol.iterator]() {
    const list = [...this.children]; //复制children
    let node; //迭代变量
    return {
      next: () => {
        while ((node = list.shift())) {
          node.children.length > 0 && list.push(...node.children);
          return { value: node, done: false };
        }
        return { value: null, done: true };
      },
    };
  }
}
