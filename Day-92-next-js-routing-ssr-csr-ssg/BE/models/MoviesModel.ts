import mongoose, { Schema } from "mongoose";

interface IMovies {
  plot: string;
  Genres: IGenres;
  runtime: number;
  cast: {
    type: [string];
  };
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: {
    type: [string];
  };
  released: number;
  directors: IDirectors;
  writers: IWriters;
  awards: IAwards;
  lastUpdated: string;
  year: number;
  imdb: IImdb;
  countries: {
    type: [string];
  };
  type: string;
  tomatoes: ITomatoes;
}

interface IDirectors {
  directors: {
    type: [string];
  };
}

interface IGenres {
  genres: {
    type: [string];
  };
}
interface IWriters {
  genres: {
    type: [string];
  };
}

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface IImdb {
  rating: number;
  votes: number;
  id: null;
}

interface ITomatoes {
  viewer: IViewer;
  lastUpdated: number;
}
interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}

const MoviesSchema: Schema = new Schema({});

const MoviesModel = mongoose.model<IMovies>("Movies", MoviesSchema);

export default MoviesModel;

