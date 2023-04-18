// const transactionsValidator = (req, res, next) => {
//     if (req.body.hasOwnProperty("id")) {
//       next();
//      } else if (!req.body.id) {
//         res.status(400).json({ error: "Transaction cannot contain empty string" });
  
//     } else {
//       res.status(400).json({ error: "Transactions must contain an id" });
//     }
//   };

  
  
  // module.exports = { transactionsValidator };