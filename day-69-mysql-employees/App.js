console.log(" DAY - 69 ");

import express from "express";
import cors from "cors";
import { api_router } from "./routes/api.js";
import { admin_router } from "./routes/admin.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/admin", admin_router);
app.use("/api", api_router);

app.get("/", (request, response) => {
  response.send(
    `<h1 style="text-align: center; background-color: teal; color: white;">DAY - 69</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
