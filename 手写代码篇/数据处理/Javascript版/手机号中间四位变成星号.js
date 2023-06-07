(function () {
  var tel = 13938066379;
  tel = "" + tel;
  var telarr = tel.split("");
  telarr.splice(3, 4, "****");
  var tel1 = telarr.join("");
  console.log(tel1);
})();
