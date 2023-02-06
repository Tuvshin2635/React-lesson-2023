console.log("Day-56 ");

const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1> EXPRESS RESP API runnig </h1>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: " file not found",
        data: [],
      });
    }
    const timerData = JSON.parse(readData); //stingees json bolgox
    console.log(timerData);
    console.log(typeof timerData);
    response.json({
      status: "success",
      data: timerData,
    });
  });
});

app.delete("/timers", (request, response) => {
  const body = request.body;

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file delete reader ERROR",
        data: [],
      });
    }
    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.timerId);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "successss",
          data: filteredObject,
        });
      }
    );
  });
});

app.post("/timers", (request, response) => {
  const body = request.body;
  console.log(request.body);

  const newUser = {
    id: body.id,
    title: body.title,
    project: body.project,
    elapsed: body.elapsed,
    runningSince: body.runningSince,
  };

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file doesnt exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    // console.log("===");
    dataObject.push(newUser);
    // console.log(dataObject);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        // console.log(dataObject);
        response.json({
          status: "success4",
          data: dataObject,
        });
      }
    );
    // console.log(dataObject);
  });
});

app.put("/timers", (request, response) => {
  console.log(request.body);

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);
    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.id = request.body.id),
          (d.title = request.body.title),
          (d.username = request.body.username);
        // (d.elapsed = request.body.elapsed),
        // (d.runningSince = request.body.runningSince),
      }
      return d;
    });

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
