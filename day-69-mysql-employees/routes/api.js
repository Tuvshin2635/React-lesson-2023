import express, { request, response } from "express";
const api_router = express.Router();
import {
  fireEmployees,
  getEmployees,
  hireEmployees,
  updateEmployee,
} from "../services/employees-services.js";

import { getPopularCategories } from "../services/category-services.js";
import {
  getChildrenMenus,
  getParentMenus,
} from "../services/menus-services.js";

api_router.get("/employees", async (request, response) => {
  const result = await getEmployees();
  console.log(result);
  response.status(200).send(result);
});

api_router.put("/employees", async (request, response) => {
  const { empNo, firstName, lastName, gender } = request.body;
  const updateEmp = await updateEmployee(empNo, firstName, lastName, gender);
  console.log(updateEmp);
  response.status(200).send({});
});

api_router.delete("/employees", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await fireEmployees(body.empNo);

  response.status(200).send({});
});

api_router.post("/employee", async (request, response) => {
  const { birthDate, firstName, lastName, gender, hireDate } = request.body;
  const { max } = await getMaxNo();
  console.log(max);
  const result = await hireEmployees(
    max + 1,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate
  );

  console.log(result);
  response.status(200).send({});
});

api_router.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});

api_router.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();

  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );

  console.log(parentMenus);

  response.status(200).send(parentMenus);
});

export { api_router };
