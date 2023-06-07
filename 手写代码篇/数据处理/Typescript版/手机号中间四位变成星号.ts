(function () {
  let tel: any = 13938066379;
  tel = "" + tel;
  const telarr = tel.split("");
  telarr.splice(3, 4, "****");
  const tel1 = telarr.join("");
  console.log(tel1);
})();
