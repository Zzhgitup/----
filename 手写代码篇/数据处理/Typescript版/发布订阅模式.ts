type Notify = (user: User) => void;
class User {
  name: string;
  status: "offine" | "online" = "offine";
  follower!: { user: User; notify: Notify }[]; //订阅者
  constructor(name: string) {
    this.name = name;
    this.status = "offine";
    this.follower = [];
  }
  //订阅此用户
  subscribe(user: User, notify: Notify) {
    user.follower.push({ user, notify });
  }
  //发布订阅
  online() {
    this.status = "online";
  }
}
export const createProxy = (name: string) => {
  const user = new User(name);
  const proxyuser = new Proxy(user, {
    set: (target, prop: keyof User, value) => {
      target[prop] = value;
      if (prop === "status") {
        notifyStatusHandlers(target, value);
      }
      return true;
    },
  });
  const notifyStatusHandlers = (user: User, status: "online" | "offine") => {
    if (status === "online") {
      user.follower.forEach(({ notify }) => {
        notify(user);
      });
    }
  };
  return proxyuser;
};
