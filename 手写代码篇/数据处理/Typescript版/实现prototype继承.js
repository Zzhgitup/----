function SupperFunction(flag1) {
  this.flag1 = flag1;
}
function childFunction(flag2) {
  this.flag2 = flag2;
}

const superinstance = new SupperFunction(true);
childFunction.prototype = superinstance;

const childinstance = new childFunction(false);

console.log(childinstance.flag1);
console.log(childinstance.flag2);
