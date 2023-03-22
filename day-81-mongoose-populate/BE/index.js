console.log("Day 80 - File Upload Multer");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/category-routes");

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://blacktuvshin:ofJXMzn4j5wRLC15@cluster0.no2ps4z.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use("/Todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (request, response) => {
  response.send("<h1>Day - 81: Mongoose populate </h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("database no problem"))
    .catch((error) => console.error(error));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
