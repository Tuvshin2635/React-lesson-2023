console.log("day-69");
import express from "express";
import emp_router from "./routes/employees.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(emp_router);

app.get("/", (require, response) => {
  response.send(
    "<h1 style='text-align: center; background-color: orange'> DAY-69 </h1>"
  );
});

// app.get("/employees", async (requist, response) => {
//   const result = getEmployees();
//   console.log(result);
//   response.json({
//     status: "success1",
//     data: result,
//   });
// });

app.listen(PORT, () => {
  console.log(`express is running http://localhost:${PORT}`);
});
