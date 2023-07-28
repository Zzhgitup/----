window.onload = () => {
  const cvs = document.createElement("canvas");
  document.body.appendChild(cvs);
  cvs.width;

  const ctx = cvs.getContext("2d");
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function init() {
    cvs.width = (window.innerWidth * devicePixelRatio) | 1;
    cvs.height = window.innerHeight * devicePixelRatio;
    cvs.id = "ribbon";
    cvs.style.cssText =
      "position:fixed;top:0;left:0;z-index: " +
      1 +
      ";width:100%;height:100%;pointer-events:none;";
    // create canvas
    document.body.style.backgroundColor = "rgb(224,108,106)"; // set parent background color
  }

  init();

  const fontSize = 20 * devicePixelRatio;
  ctx.font = `${fontSize}px Cambria, Cochin, Georgia, Times, "Times New Roman", serif`;

  const columCount = Math.floor(cvs.width / fontSize);
  const charIndex = new Array(columCount).fill(0);
  function getRandomChar() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  function draw() {
    ctx.fillStyle = "rgba(228,228,236,0.1)";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = getRandomColor();
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
