const memo = require("../models/memo");

exports.create = async (req, res) => {
  try {
    //メモ新規作成
    const memo = await memo.create({});
  } catch {
    res.status(500).json(err);
  }
};
