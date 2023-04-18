const transactionsValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("id") && req.body.hasOwnProperty(Number("amount"))) {
      next();
     } else if (!req.body.id || !req.body.amount) {
        return res.status(400).json({ error: "Transaction cannot contain empty string" });
  
    } else {
      return res
        .status(400)
        .json({ error: "Transactions must contain an id and a amount" });
    }
  };

  
  
  module.exports = { transactionsValidator };