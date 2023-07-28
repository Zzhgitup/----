function creatJSONP(src: string) {
  const script: HTMLScriptElement = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  document.appendChild(script);
}
creatJSONP("http://127.0.0.1:5173/get/user?callback=handresult");
function handresult(res: any) {
  console.log(res);
}
handresult({ a: 1, b: 2 });
