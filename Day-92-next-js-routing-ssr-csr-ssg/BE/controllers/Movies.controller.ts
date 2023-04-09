import MoviesModel from "../models/MoviesModel";
import { Response, Request } from "express";

export const getMovies = async (req: Request, res: Response) => {
  // const page: number = Number(req.query.page);
  // const moviesPerPage: number = Number(req.query.moviesPerPage);
  const page: number = Number(req.query.page) || 1;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 8;

  try {
    const movies = await MoviesModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page)
      .sort({ year: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ data: ["why why xooson ireed bgain be"] });
  }
};

// export const getDetails = async (req: Request, res: Response) => {
//   // const page: number = Number(req.query.page) || 0;
//   // const moviesPerPage: number = Number(req.query.moviesPerPage) || 16;
//   try {
//     const { id } = req.params;
//     const details = await MoviesModel.findOne({ _id: id });
//     res.status(200).json(details);
//   } catch (error) {
//     res.status(404).json({ data: ["bxguie xooson id irlee"] });
//   }
// };

export const getDetails = async (req: Request, res: Response) => {
  try {
    const movies = await MoviesModel.find({
      _id: req.params.id,
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: ["bxguie xooson id irlee"] });
  }
};
