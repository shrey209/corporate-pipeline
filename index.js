require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello World test1");
});

const PORT = process.env.PORT | 80;

app.listen(PORT, () => console.log(`Server Started at Port:${PORT}`));
