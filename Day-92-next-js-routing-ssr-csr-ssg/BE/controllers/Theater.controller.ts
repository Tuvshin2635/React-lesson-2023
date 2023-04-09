import TheaterModel from "../models/theaters.model";
import { Response, Request } from "express";

export const getTheaters = async (req: Request, res: Response) => {
  try {
    const theaters = await TheaterModel.find();
    res.status(200).json(theaters);
  } catch (error) {
    res.status(400).json({ data: [] });
  }
};

export const getTheaterById = async (req: Request, res: Response) => {
  try {
    const theaters = await TheaterModel.find({
      theaterId: Number(req.params.id),
    });
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: ["enevv"] });
  }
};

export const searchByZipCode = async (req: Request, res: Response) => {
  const zipcode: string = String(req.query.keyword);
  try {
    const theaters = await TheaterModel.findOne({
      "location.address.zipcode": zipcode,
    });
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchByStreet = async (req: Request, res: Response) => {
  const street1: string = String(req.query.keyword);
  try {
    const theaters = await TheaterModel.findOne({
      "location.address.street1": street1,
    });
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchByCity = async (req: Request, res: Response) => {
  const city: string = String(req.query.keyword);
  try {
    const theaters = await TheaterModel.findOne({
      "location.address.city": city,
    });
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchByKey = async (req: Request, res: Response) => {
  const keyword: string = String(req.query.keyword);

  try {
    const theaters = await TheaterModel.find({
      $or: [
        { "location.address.zipcode": { $regex: keyword } },
        { "location.address.street1": { $regex: keyword } },
        { "location.address.city": { $regex: keyword } },
      ],
    });
    res.json({ data: theaters });
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
