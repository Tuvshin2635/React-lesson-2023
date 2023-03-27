const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const restaurantApi = require("./routes/restaurants.routes");
const neighborhoodApi = require("./routes/neighborhood.routes");

require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/restaurant", restaurantApi);
app.use("/neighborhood", neighborhoodApi);

app.get("/", (request, response) => {
  response.send("DAY85");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("MONGOOSE NICE"))
    .catch(() => console.error(error));
  console.log(`Day 85 - AUTHORIZE on http://localhost:${PORT}`);
});
