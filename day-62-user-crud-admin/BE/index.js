const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8081;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

//API USER REGISTER

app.post("/register", (request, response) => {
  const body = request.body;

  console.log(body);
  //fs read from users json
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file notFound from readFile",
        data: [],
      });
    }
    const readDataObj = JSON.parse(readData);
    console.log(readDataObj);

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file error dotor readFile",
          data: [],
        });
      }
      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];
      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
          });
        }
        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }
          console.log("hashdata:", hashData);
          const newUser = {
            firstName: body.firstName,
            lastName: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };
          readDataObj.push(newUser);

          fs.writeFile(
            "./data/users.json",
            JSON.stringify(readDataObj),
            (writeError) => {
              if (writeError) {
                response.json({
                  status: "file write error",
                });
              }
              response.json({
                status: "succes write",
                data: readDataObj,
              });
            }
          );
        });
      });

      //fs write
    });
  });
});

/// API user login
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  //file unshixad amjiltgui bolvol
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "filenotfound",
        data: [],
      });
    }
    //hervee filaa unshaad amjilttai bolvol json filneesaa hereglegchiig haina

    const usersArrayObject = JSON.parse(readData);
    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );
    if (foundUser.length === 0) {
      response.json({
        status: "user not found",
        data: [],
      });
    } else {
      const foundUserObj = foundUser[0];
      const plainPassword = body.password;
      const savedPassword = foundUserObj.password;
      console.log(foundUserObj);

      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "user name or password do not match",
              data: [],
            });
          }
          if (compareResult) {
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstName: foundUserObj.firstname,
                lastName: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "username or password do not match",
              data: [],
            });
          }
        }
      );
    }
  });
});

//API get all users

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    response.json({
      status: "success write",
      data: JSON.parse(readData),
    });
  });
});

// API get all user Role
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
