const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//ユーザー新規登録API

//ユーザーログイン用APi

app.listen(PORT, () => {
  console.log("ローカルサーバ起動中・・・");
});
