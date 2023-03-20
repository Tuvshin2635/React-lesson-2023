const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { response, request } = require("express");

const storage = multer.diskStorage({
  destination: (request, file, cd) => {
    cd(null, "./uploads");
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
const PORT = 8081;

// const upload = multer({ desc: ".uploads/" });

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (request, response) => {
  response.send("<h1> DAY-80 File upload Multer</h1>");
});

app.post(
  "/fileUpload",
  upload.single("image"),
  function (request, response, next) {
    console.log(request.file);
    response.json({
      data: [],
    });
  }
);

app.listen(PORT, (error) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
