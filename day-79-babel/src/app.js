import express from "express";
import helloRouter from "./routes/api";

// const express = require("express");

const app = express();

const PORT = 8081;

app.use(helloRouter);

app.get("/", (request, response) => {
  response.status(200).send("<h1> DAY 79 Buble</h1>");
});

app.listen(PORT, () => {
  console.log(`application running on http://localhost:${PORT}`);
});
