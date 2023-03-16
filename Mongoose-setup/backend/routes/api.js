const express = require("express");
const User = require("../models/users");
const Router = express.Router();

Router.get("/users", async (request, response) => {
  const result = await User.find({});
  console.log(result);
  response.json({ data: result });
});

Router.get("/user", async (request, response) => {
  const userId = request.query.id;
  console.log(userId);
  const user = await User.findOne({ _id: userId });
  response.json({
    data: user,
  });
});

Router.get("/userbyemail", async (request, response) => {
  const userEmail = request.query.email;

  const fountUser = await User.find({ email: userEmail }, "_id name email", {
    sort: "lastLogin",
  }).exec();
  response.json({
    data: fountUser,
  });
});

Router.get("/userGetEmail", async (request, response) => {
  const userEmail = request.query.email;
  const foundUser = await User.findByUserEmail(userEmail);
  response.json({
    data: foundUser,
  });
});

Router.post("/user", async (request, response) => {
  const body = request.body;

  const newUser = new User(body);
  const result = await newUser.save();

  console.log(result);

  response.json({
    data: result,
  });
});

Router.delete("/user", async (request, response) => {
  const body = request.body;
  //   console.log(body);

  const result = await User.findOneAndDelete({ _id: body.id });
  response.json({ data: result });
});

Router.put("/updateUser", async (request, response) => {
  const result = await User.updateOne(
    { email: "twgi@gmail.com" },
    { $set: { lastLogin: "2000-09-09" } }
  );
  response.json({ data: result });
});

module.exports = Router;
