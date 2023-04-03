import { Router } from "express";
import {
  getTheaters,
  getTheaterById,
  searchByZipCode,
  searchByStreet,
  searchByCity,
  searchByKey,
} from "../controllers/Theater.controller";

const theaterRouter = Router();

theaterRouter.get("/list", getTheaters);

theaterRouter.get("/byId/:id", getTheaterById);

theaterRouter.get("/searchByZipCode", searchByZipCode);

theaterRouter.get("/searchByStreet", searchByStreet);

theaterRouter.get("/searchByCity", searchByCity);

theaterRouter.get("/searchByCityZipStreet", searchByKey);

export default theaterRouter;
