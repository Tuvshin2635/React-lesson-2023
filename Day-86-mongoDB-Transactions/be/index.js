const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const addressApi = require("./Routes/transaction-route");
const productApi = require("./Routes/product-route");
const transactionApi = require("./Routes/transaction-route");

require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/shipping", addressApi);
app.use("/product", productApi);
app.use("/transaction", transactionApi);

app.get("/", (req, res) => {
  res.send("<h1>Day 86 MongoDB Transaction </h1> ");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("howdy Mongoose"))
    .catch(() => console.error(error));
  console.log(`Day 86 - AUTHORIZE on http://localhost:${PORT}`);
});
