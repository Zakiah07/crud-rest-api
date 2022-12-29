const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://zakiah:allahuakbar.@cluster0.yysjosd.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const alienRouter = require("./routes/aliens");
app.use("/aliens", alienRouter);

app.listen(9000, () => {
  console.log("Server started");
});
