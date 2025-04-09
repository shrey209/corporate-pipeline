require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("Umesh Bhau ka Project");
});

const PORT = process.env.PORT | 80;

app.listen(PORT, () => console.log(`Server Started at Port:${PORT}`));
