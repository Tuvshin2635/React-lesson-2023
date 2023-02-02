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

// app.post("/products", (request, response) => {
//   //create new
//   const body = request.body;

//   const newUser = {
//     id: Data.now().toString(),
//     firstname: body.firstname,
//     lastname: body.lastname,
//     age: body.age,
//     password: body.password,
//   };
//   fs.readFile("/.data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file doesnt exist from readFile",
//         data: [],
//       });
//       response.json({
//         status: "success",
//         data: dataObject,
//       });
//     }

//     const dataObject = JSON.parse(readData);
//     dataObject.push(newUser);

//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(dataObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "Error during file write",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success4",
//           data: dataObject,
//         });
//       }
//   });
// });

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
