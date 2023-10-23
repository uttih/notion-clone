const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
require("dotenv").config();

//DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DBと接続中・・・");
} catch (error) {
  console.log(error);
}

//ユーザー新規登録API

//ユーザーログイン用APi

app.listen(PORT, () => {
  console.log("ローカルサーバ起動中・・・");
});
