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

/* class Route1 {
  route: any;
  currentHash: any;
  constructor() {
    this.route = {}; //储存路由
    this.currentHash = ""; //当前路由信息
  }
  storeroute(path: string, callback: any) {
    this.route[path] = callback || function () {};
  }
  freshroute() {
    this.currentHash = location.hash.slice(1) || "/";
    this.route[this.currentHash];
  }
} */
