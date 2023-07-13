class HttpRequesturl {
  async get(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  async post(url: string, data: object) {
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Cotent-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const date = res.json();
    return date;
  }
  async put(url: string, data: object) {
    const res = await fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const date = res.json();
    return date;
  }
  async delete(url: string, data: object) {
    const res = await fetch(url, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = res.json();
    return result;
  }
}
const httprequire = new HttpRequesturl();
async function name2() {
  const res = await httprequire.get("www.baidu.com?ws=123");
  console.log(res);
}
