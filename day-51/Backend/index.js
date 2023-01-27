console.log("day 51 API ");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request, response } = require("express");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    name: "Tuvshin",
    major: "computer",
  },
];

app.get("/", (request, response) => {
  response.send("here is brutally");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  // console.log(request.method);
  // console.log(request.headers);
  const length = data.length;
  const newData = {
    id: length + 1,
    name: request.body.name,
    major: request.body.major,
  };
  data = [...data, requestData];
  // data.push(newData);
  response.json(data);
});

app.delete("/data", (request, response) => {
  console.log(request.body);
  const newData = data.filter((d) => d.id !== request.body.id);
  data = newData;
  console.log(data);
  response.json(data);
});

app.put("/data", (request, response) => {
  const found = data.filter((d) => {
    d.id !== request.body.id;
  });
  data = [...found, request.body];

  // const newData = data.map((d) => {
  //   if (d.id === request.body.id) {
  //     (d.name = request.body.name), (d.major = request.body.major);
  //   }
  //   return d;
  // });

  // data = newData;
  // console.log(request.body);
  // console.log(data);

  const newData = {
    name: request.body.name,
    major: request.body.major,
  };
  data.push(newData);

  response.json(data);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
