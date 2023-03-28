const { Router } = require("express");
const { createTransaction } = require("../controllers/transaction-controller");
const {
  creatTransactionWithOutSession,
} = require("../controllers/transaction-controller");

const router = Router();

router.get("/shipping", createTransaction);
router.get("/shippingWithoutSession", creatTransactionWithOutSession);

module.exports = router;
