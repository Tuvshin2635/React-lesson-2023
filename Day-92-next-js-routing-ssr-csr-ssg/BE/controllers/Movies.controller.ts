import MoviesModel from "../models/MoviesModel";
import { Response, Request } from "express";

export const getMovies = async (req: Request, res: Response) => {
  // const page: number = Number(req.query.page);
  // const moviesPerPage: number = Number(req.query.moviesPerPage);

  try {
    const movies = await MoviesModel.find({});
    // .limit(moviesPerPage)
    // .skip(moviesPerPage * page)
    // .sort({ year: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ data: ["why why xooson ireed bgain be"] });
  }
};
