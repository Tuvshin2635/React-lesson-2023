console.log("day-55");

const express = require("express");

const app = express();

app.use(express.static("public"));

const PORT = 8080;

const returnHTML = `
<html> 
<head>
<title>Hello Ex JS </title>
<link href="/style.css" rel="stylesheet">
</head>
<body>
<h1> Helloo EX </h1>
<button onclick="alertMe()"> CLICK ME </button>
<script src="/script.js"> </script>
</body>
</html>
`;

app.get("/", (request, response) => {
  response.send(returnHTML);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
