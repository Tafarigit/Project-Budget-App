const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");
const { transactionsValidator } = require("../models/validators.js");

// GET ALL TRANSACTIONS
transactions.get("/", (req, res) => {
  console.log("Get /transactions");
  res.json(transactionsArray);
});

// POST ONE TRANSACTION
transactions.post("/", (req, res) => {
  res.json(transactionsArray.push(req.body));
  res.status(201).json(transactions[transactionsArray.length -1]);
});


// GET ONE TRANSACTION
transactions.get("/:index", (req, res) => {  
  console.log("Get /transactions/:index");
  const { index } = req.params;
  if (transactionsArray[index]) {
    res.json(transactionsArray[index]);
  } else {
    res.json({ error: `Transaction with index ${index} not found` });
  }
});
  // const foundTransaction = transactionsArray.find((transaction) => {
  //   if (transaction.id === id) {
  //     // console.log("Found transaction: ", transaction);
  //     res.json(transaction);
  //   }else {
  //     res.status(404).json({ error: `Transaction with id ${id} not found` });
  //   }
  // }); 
//Edit one transaction
transactions.put("/:index", transactionsValidator, (req, res) => {
  if (transactionsArray[index]) {
    res.json(transactionsArray[index])
    res.status(200).json(transactionsArray[index])
  } else {
    res.status(404).json({ error: `Transaction with index ${index} not found` });
  }

})

// DELETE ONE TRANSACTION
transactions.delete("/:index", (req, res) => {
  console.log("Delete /transactions/:index");
  const { index } = req.params;
  if (transactionsArray[index]) {
    transactionsArray.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: `Transaction with index ${index} not found` });
  }
});


module.exports = transactions;
