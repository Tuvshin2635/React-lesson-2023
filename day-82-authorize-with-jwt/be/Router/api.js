const express = require("express");
const apiRouter = express.Router();
const auth = require("../middleware/auth");

// ApiRouter.get("/", async (request, response) => {
//   response.status(200).json({
//     data: [],
//   });
// });

apiRouter.post("/protected", auth, (request, response, next) => {
  response.status(200).json({
    data: "succces protected",
  });
});

apiRouter.post("/unprotected", auth, (request, response, next) => {
  response.status(200).json({
    data: "unprotected",
  });
});

module.exports = apiRouter;
