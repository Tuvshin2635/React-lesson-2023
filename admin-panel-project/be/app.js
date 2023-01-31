console.log("its my app.js");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

/// configuration of moduls

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express());

app.listen(PORT, () => {
  console.log(`server is running on http://localhost${PORT}`);
});
