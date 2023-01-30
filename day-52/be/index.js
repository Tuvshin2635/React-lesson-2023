const { response } = require("express");
const cors = require("cors");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const { get, request } = require("http");

const app = express();
const PORT = 8080;
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader ERRORRRRR",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);
    response.json({
      status: "SUCCESSS",
      data: objectData,
    });
  });
});

app.post("/users", (request, response) => {
  const body = request.body;

  const newUser = {
    id: Date.now().toString(),
    username: body.username,
    age: body.age,
  };
  //
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file doesnt exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    // console.log(dataObject);
    // console.log("===");
    dataObject.push(newUser);
    // console.log(dataObject);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });

  // post requist yvuulax
});

app.delete("/users", (request, response) => {
  const body = request.body;
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader ERROR",
        data: [],
      });
    }
    const readObject = JSON.parse(readData);

    const filteredObjects = readObject.filter((o) => o.id !== body.userId); // o --n idtai tentsvv bish uyd hadgalaad bna
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`server is runnign http://localhost:${PORT}`);
});
