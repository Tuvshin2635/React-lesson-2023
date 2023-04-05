import MoviesModel from "../models/MoviesModel";
import { Response, Request } from "express";

export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 5;

  try {
    const movies = await MoviesModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ data: ["why xooson ireed bgain be"] });
  }
};
