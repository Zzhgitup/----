class Route {
  routes: any;
  currentHash: string;
  constructor() {
    this.routes = {}; //储存路由信息
    this.currentHash = ""; //当前路由信息
    this.freshRoute = this.freshRoute.bind(this); //将函数this绑定一下；
  }
  storeRoute(path: string, cb: any) {
    this.routes[path] = cb || function () {};
  }
  freshRoute() {
    this.currentHash = location.hash.slice(1) || "/";
    this.routes[this.currentHash];
  }
}
