const { Router } = require("express");
const { getNeighborhoods } = require("../controllers/neighborhood.controllers");

const route = Router();

route.get("/neighborhoods", getNeighborhoods);

module.exports = route;
