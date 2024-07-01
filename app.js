const express = require("express");
const connectDB = require("./database");

const app = express();

connectDB();
app.listen(8000, () => {
  console.log("localhost 8000");
});
