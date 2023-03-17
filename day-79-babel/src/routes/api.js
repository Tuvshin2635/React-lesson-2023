import express from "express";

const helloRouter = express.Router();

helloRouter.get("/hello", (request, response) => {
  response.status(200).json({
    data: "HELLO",
  });
});

export default helloRouter;
