class EventCenter {
  // 定义事件容器
  private handler: Record<string, Function[]> = {};

  public addEventListener(type: string, handler: Function): void {
    //创建事件数组
    if (!this.handler[type]) {
      this.handler[type] = [];
    }
    //存入事件
    this.handler[type].push(handler);
  }
  //触发事件
  public dispatch(type: string, params: []) {
    if (!this.handler[type]) {
      return new Error("该事件未注册");
    }
    this.handler[type].forEach((item) => {
      item(...params);
    });
  }
  //删除事件
  public removeenent(type: string, handler: any) {
    if (!this.handler[type]) {
      return new Error("事件无效");
    }
    if (!handler) {
      delete this.handler[type];
    } else {
      const index = this.handler[type].findIndex((el) => el === handler);
      if (index == -1) {
        return new Error("无绑定该事件");
      }
      this.handler[type].splice(index, 1);
      //如果没有事件，则进行删除
      if (this.handler[type].length == 0) {
        delete this.handler[type];
      }
    }
  }
}
