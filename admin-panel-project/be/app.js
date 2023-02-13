// console.log("its my app.js");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader ERROR from app.get",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);
    response.json({
      status: "SUCCESS3",
      data: objectData,
    });
  });
});

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(request.body);

  const newUser = {
    id: Date.now().toString(),
    firstname: body.firstname,
    lastname: body.lastname,
    age: body.age,
    email: body.email,
    password: body.password,
  };

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
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
      "./data/users.json",
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

app.delete("/users", (request, response) => {
  const body = request.body;

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.userId);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

//put app.js bolson ediduserlistdeer handle dutuu
// app.put("/users", (request, response) => {
//   console.log(request.body);

//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file read error",
//         data: [],
//       });
//     }
//     const savedData = JSON.parse(readData);
//     const changedData = savedData.map((d) => {
//       if (d.id === request.body.id) {
//         (d.firstname = request.body.firstname),
//           (d.lastname = request.body.lastname),
//           (d.age = request.body.age);
//         d.email = request.body.email;
//       }
//       return d;
//     });

//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(changedData),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "file write error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: changedData,
//         });
//       }
//     );
//   });
// });

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
