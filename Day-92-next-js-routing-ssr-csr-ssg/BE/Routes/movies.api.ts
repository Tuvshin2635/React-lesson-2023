import { Router } from "express";
import { getDetails, getMovies } from "../controllers/Movies.controller";

const movieRouter = Router();

movieRouter.get("/list", getMovies);
movieRouter.get("/byid/:id", getDetails);

export default movieRouter;
