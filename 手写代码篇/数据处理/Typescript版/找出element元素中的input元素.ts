(function () {
  function findAllinputelement(element: Element) {
    const rec = function (element: Element, arr: any[]) {
      if (element.nodeName.toUpperCase() == "INPUT") {
        arr.push(element);
      }
      let children = element.childNodes;
      children.forEach((element) => {
        rec(element as Element, arr);
      });
      return arr;
    };
    return rec(element, []);
  }
  // 测试案例
  const container = document.createElement("div");
  container.innerHTML = `
		<input type="text" name="input1" />
		<div>
		  <input type="text" name="input2" />
		  <input type="text" name="input3" />
		</div>
	  `;
  const inputElements = findAllinputelement(container);

  // 断言
  if (inputElements.length !== 3) {
    console.error("期望找到3个输入元素，但实际找到", inputElements.length);
  } else {
    console.log("所有测试案例通过");
  }
})();
