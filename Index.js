const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let wifiList = [];

app.post("/wifi", (req, res) => {
  const { ssid, password } = req.body;
  if (!ssid || !password) {
    return res.status(400).json({ message: "اطلاعات ناقصه!" });
  }
  wifiList.push({ ssid, password, time: new Date() });
  res.json({ message: "ذخیره شد", data: { ssid, password } });
});

app.get("/wifi", (req, res) => {
  res.json(wifiList);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
