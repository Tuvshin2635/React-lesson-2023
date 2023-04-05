import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import theaterRouter from "./Routes/Theaters.api";
import cors from "cors";
import movieRouter from "./Routes/movies.api";
import commentRouter from "./Routes/comments-api";
require("dotenv").config();

const app: Express = express();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongoDB://localhost:8080/test";

app.use(cors());

let name: string = "<h1 style='Text-align:center'>  Day-92 SSR CSR </h1>";
// name = "test";

// let phoneNumber: number = 99119911;
// let isMarried: boolean = false;
// let sheeps: Array<string> = ["sheeps", "sheep2", "sheep"];
// let sheep: string[] = ["sheep1", "sheep02", "sheep03"];
// let sheepObject: { name: string; age: number } = { name: "sheep1", age: 1 };

interface Student {
  name: string;
  age: number;
  isVerified: boolean;
}

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send(name);
});

app.use("/theaters", theaterRouter);
app.use("/movies", movieRouter);
app.use("/comments", commentRouter);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("howdy Mongoose"))
    .catch((err) => console.error(err));
  console.log(`Day 90 running port 8080`);
});
