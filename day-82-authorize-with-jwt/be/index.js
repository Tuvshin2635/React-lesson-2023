console.log("Day 82 - AUTHORIZE");

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const adminRouter = require("./Router/admin-api");
const Router = require("./Router/api");

require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/", Router);

app.get("/", (request, response) => {
  response.send("DAY82");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("MONGOOSE NICE"))
    .catch(() => console.error(error));
  console.log(`Day 82 - AUTHORIZE on http://localhost:${PORT}`);
});
