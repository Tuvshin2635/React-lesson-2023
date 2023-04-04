import React, { useEffect, useState } from "react";

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

function MoviesData(): JSX.Element {
  const [movies, setMovies] = useState<IMovies>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (): Promise<void> => {
    const FETCHED_DATA = await fetch("http://localhost:8080/movies/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
    console.log(FETCHED_JSON);
  };
  return (
    <div>
      <h1>Movies API</h1>
      {/* {movies} */}
      {movies.map((e, index) => {
        <p key={index}> {e} </p>;
      })}
    </div>
  );
}

export default MoviesData;
