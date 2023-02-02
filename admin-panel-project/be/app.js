// console.log("its my app.js");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const { get, request } = require("http");
const { response } = require("express");

/// configuration of moduls

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express());

app.get("/users", (request, response) => {
  //frontdeer gargana
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader ERROR from app.get",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);
    response.json({
      status: "SUCCESS",
      data: objectData,
    });
  });
});

app.post("/products", (request, response) => {
  //create new
  const body = request.body;

  const newUser = {
    id: Data.now().toString(),
    firstname: body.firstname,
    lastname: body.lastname,
    age: body.age,
    password: body.password,
  };
  fs.readFile("/.");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost${PORT}`);
});
