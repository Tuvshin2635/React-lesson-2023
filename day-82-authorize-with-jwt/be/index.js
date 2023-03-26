console.log("Day 82 - AUTHORIZE");

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const adminRouter = require("./Router/admin-api");
const Router = require("./Router/api");
const MONGO_CONNECTION_STRING =
<<<<<<< HEAD
  "mongodb+srv://blacktuvshin:WWQm9ZbriN8y9udr@cluster0.no2ps4z.mongodb.net/test";
=======
  "mongodb+srv://blacktuvshin:R0jubB3t3ciaK0Ey@cluster0.no2ps4z.mongodb.net/test";

>>>>>>> 682ba961db1cc7c3c615d5d80c27a818f61209bd
const app = express();
const PORT = 8080;

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
