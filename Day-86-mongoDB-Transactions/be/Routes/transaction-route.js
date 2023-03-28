const { Router } = require("express");
const { createTransaction } = require("../controllers/transaction-controller");
const {
  creatTransactionWithOutSession,
} = require("../controllers/transaction-controller");

const router = Router();

router.post("/shipping", createTransaction);
router.post("/shippingWithoutSession", creatTransactionWithOutSession);

module.exports = router;
