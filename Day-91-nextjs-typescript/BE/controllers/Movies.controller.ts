import MoviesModel from "../models/MoviesModel"
import { Response, Request } from "express"

export const getMovies = async (req: Request, res: Response) => {
    try {
        const movies = await MoviesModel.find()
        res.status(200).json(movies)
    } catch (error) {
        res.status(400).json({ data: ['ene munvv']})
    }
}

