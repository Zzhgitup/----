window.onload = () => {
  const cvs = document.createElement("canvas");
  document.body.appendChild(cvs);
  cvs.width;
  /* const cvs = document.getElementById("canvas"); */
  console.log(cvs);
  const ctx = cvs.getContext("2d");
  function init() {
    cvs.width = window.innerWidth * devicePixelRatio;
    cvs.height = window.innerHeight * devicePixelRatio;
  }
  init();
  const fontSize = 20 * devicePixelRatio;
  ctx.font = `${fontSize}px Cambria, Cochin, Georgia, Times, "Times New Roman", serif`;
  const columCount = Math.floor(cvs.width / fontSize);
  const charIndex = new Array(columCount).fill(0);
  ctx.fillStyle = "#fff";
  function getRandomChar() {
    const str = "0123456789abcdefghijklmnopqrstuvwxyz";
    return str[Math.floor(Math.random() * str.length)];
  }

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = "#6BE445";
    ctx.textBaseline = "top";
    for (let i = 0; i < columCount; i++) {
      const x = i * fontSize;
      const y = charIndex[i] * fontSize;
      ctx.fillText(getRandomChar(), x, y);
      if (y > cvs.height && Math.random() > 0.99) {
        charIndex[i] = 0;
      } else {
        charIndex[i]++;
      }
    }
  }
  setInterval(() => {
    draw();
  }, 50);
};
