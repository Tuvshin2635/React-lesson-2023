import { Router } from "express";
import { getComments } from "../controllers/Comments";

const commentRouter = Router();

commentRouter.get("/list", getComments);

export default commentRouter;
