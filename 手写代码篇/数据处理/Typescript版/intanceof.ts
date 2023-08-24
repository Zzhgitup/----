const myinstanceof = (left: any, rigth: any) => {
  let proto = left.prototype;
  const prototype = rigth.prototype;
  while (true) {
    if (!proto) return false;
    if (proto == prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
};
