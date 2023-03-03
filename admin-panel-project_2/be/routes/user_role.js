import { getUserRole } from "../services/user_role-services.js";
import express from "express";

const user_role_router = express.Router();

user_role_router.get("/user_role", async (request, response) => {
  const result = getUserRole();
  response.status(200).send(result);
});

export default user_role_router;
