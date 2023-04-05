import CommentsModel from "../models/CommentsModel";
import { Response, Request } from "express";

export const getComments = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 10;

  try {
    const comments = await CommentsModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ data: ["comments xooson"] });
  }
};
