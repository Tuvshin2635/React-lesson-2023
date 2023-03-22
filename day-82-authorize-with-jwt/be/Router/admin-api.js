const express = require("express");
const Users = require("../Model/users");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

adminRouter.post("/register", async (request, response) => {
  const { email, password } = request.body;
  const oldUser = await Users.findOne({ email: email });
  const hashedPassword = await bcrypt.hash(password, 10);
  if (oldUser) {
    return response.status(500).json({
      data: "user already exists",
    });
  }
  if (email && password) {
    Users.create({ email: email, password: hashedPassword })

      .then((data) => {
        response.status(201).json({
          message: "amjilttai",
          email: data.email,
        });
        return;
      })
      .catch((error) => {
        return response.status(500).json({
          succes: false,
          error,
        });
      });
  } else {
    return response.json({ error: "EMPTY!! FILL" });
  }
});

adminRouter.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!(email && password)) {
      return response.status(400).json({
        data: "utgiig bvren oruulna uu",
      });
    }
    const user = await Users.findOne({ email });
    const isMatch = bcrypt.compare(password, user?.password);

    if (user && isMatch) {
      const token = jwt.sign(
        { user_id: user._id, email: email },
        "mySuperDuperPrivateKey",
        { expiresIn: "24h" }
      );
      return response.status(200).json({
        succes: true,
        status: "amjilttai",
        data: user,
        token: token,
      });
    } else {
      return response.status(400).json({
        succes: false,
        status: "NUUTS VG NER BURUU",
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = adminRouter;
