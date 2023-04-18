const express = require("express");
const transactionsController = require("./Controllers/transactionsController.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Budget App");
});

app.use("/transactions", transactionsController);

// app.get("*", (req, res) => {
//     console.log("404!");
//     res.status(404).json({ error: "Page Not Found" });
//   });

module.exports = app;
