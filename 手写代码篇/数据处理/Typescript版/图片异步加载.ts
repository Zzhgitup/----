(async function () {
  const imgAsync = async (url: string) => {
    try {
      let img = new Image();
      img.src = url;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error("图片加载失败"));
      });
      console.log("图片请求成功");
      return img;
    } catch (error: any) {
      console.log("图片请求失败", error.message);
      throw error;
    }
  };

  try {
    const imageData = await imgAsync(
      "https://article.biliimg.com/bfs/article/ae607551eda6a5c9ca526289a7bcfe56135e18af.jpg"
    );
    console.log(imageData);
  } catch (error) {
    console.log("加载图片时发生错误", error);
  }
})();
