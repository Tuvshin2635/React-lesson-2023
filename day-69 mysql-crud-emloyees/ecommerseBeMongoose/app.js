const mongoose = require("mongoose");
const menuApi = require("./routes/menu-api");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const MONGODB_CONNECTION_STRING =
  "mongodb+srv://blacktuvshin:89bOVGHyXP75aPsl@cluster0.no2ps4z.mongodb.net/test";

app.use(cors());
app.use(express.json());
app.use("/menu", menuApi);

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(console.log("DATABASE SUUUUUCCCES"))
    .catch((error) => console.error(error));

  console.log(`ecommers is running http://localhost:${PORT}`);
});
