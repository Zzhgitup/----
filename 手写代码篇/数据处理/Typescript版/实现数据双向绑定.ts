let obj = {
  text: "",
};
let input: HTMLInputElement = document.getElementById(
  "input"
) as HTMLInputElement;
let span: HTMLSpanElement = document.getElementById("span") as HTMLSpanElement;

Object.defineProperty(obj, "text", {
  configurable: true,
  enumerable: true,
  get() {
    console.log("获取数据");
  },
  set(v) {
    console.log("数据更新了");
    input.value = v;
    span.innerHTML = v;
  },
});
input?.addEventListener("keyup", function (e: any) {
  obj.text = e.target?.value;
});
