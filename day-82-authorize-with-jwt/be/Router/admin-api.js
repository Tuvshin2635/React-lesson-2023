const express = require("express");
const Users = require("../Model/users");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRole = require("../Model/userRole");

adminRouter.post("/register", async (request, response) => {
  const data = request.body;
  console.log(request.body);
  if (data) {
    const oldUser = await Users.findOne({ email: data.email });
    if (oldUser) {
      return response.status(400).json({
        success: false,
        data: "user already exists",
      });
    }
    var hashedPassword = await bcrypt.hash(data.password, 10);

    data.password = hashedPassword;

    try {
      const user = await Users.create(data);
      const result = await user.populate("userrole");
      response.status(201).json({
        message: "hereglegch amjilttai orov",
        data: result,
      });
    } catch (error) {
      response.status(500).json({
        success: false,
        data: error,
      });
    }
  } else {
    return response.json({
      error: "EMPTY!! FILL",
    });
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

adminRouter.post("/role/create", async (req, res) => {
  const { name } = req.body;
  const userResult = await UserRole.create({ name });

  res.status(200).json({
    data: userResult,
  });
});

adminRouter.get("/role/list", async (req, res) => {
  const result = await UserRole.find({});
  res.status(200).json({
    data: result,
  });
});

module.exports = adminRouter;
