const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://zakiah:allahuakbar.@cluster0.yysjosd.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", function () {
  console.log("connected...");
});
