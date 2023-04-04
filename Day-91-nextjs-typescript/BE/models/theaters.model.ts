import mongoose, { Schema } from "mongoose";

interface IAddress {
  street1: string;
  city: string;
  state: string;
  zip: string;
}

interface ILocation {
  address: IAddress;
  geo: IGeo;
}

interface IGeo {
  type: { type: string; enum: ["Point"]; required: true };
  coordinates: {
    type: [Number, Number];
    required: true;
  };
}

interface ITheater {
  theaterId: number;
  location: ILocation;
}

const TheaterSchema: Schema = new Schema({});

const TheaterModel = mongoose.model<ITheater>("Theater", TheaterSchema);

export default TheaterModel;
