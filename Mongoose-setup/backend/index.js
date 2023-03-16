console.log("DAY_77");

const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");

const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://blacktuvshin:89bOVGHyXP75aPsl@cluster0.no2ps4z.mongodb.net/test";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("Database mongoose running"))
  .catch((error) => console.error(error));

const app = express();

app.use(express.json());
app.use(apiRouter);

app.get("/", (request, response) => {
  response.send(`<h1> DAY- 77 Mongoose Application </h1>`);
});

app.listen(PORT, () => {
  console.log(`express application is running on http://localhost:${PORT}`);
});
