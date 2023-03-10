import express from "express";
const admin_router = express.Router();
import {
  fireEmployees,
  getEmployees,
  hireEmployees,
  updateEmployee,
} from "../services/employees-services.js";

admin_router.get("/employees", async (request, response) => {
  const result = await getEmployees();
  console.log(result);
  response.status(200).send(result);
});

admin_router.put("/employees", async (request, response) => {
  const { empNo, firstName, lastName, gender } = request.body;
  const updateEmp = await updateEmployee(empNo, firstName, lastName, gender);
  console.log(updateEmp);
  response.status(200).send({});
});

admin_router.delete("/employees", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await fireEmployees(body.empNo);

  response.status(200).send({});
});

admin_router.post("/employee", async (request, response) => {
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

export { admin_router };
