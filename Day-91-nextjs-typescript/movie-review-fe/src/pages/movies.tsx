import React, { useEffect, useState } from "react";

// interface IMovies {
//   plot: string;
//   Genres: IGenres;
//   runtime: number;
//   cast: {
//     type: [string];
//   };
//   num_mflix_comments: number;
//   poster: string;
//   title: string;
//   fullplot: string;
//   languages: {
//     type: [string];
//   };
//   released: number;
//   directors: IDirectors;
//   writers: IWriters;
//   awards: IAwards;
//   lastUpdated: string;
//   year: number;
//   imdb: IImdb;
//   countries: {
//     type: [string];
//   };
//   type: string;
//   tomatoes: ITomatoes;
// }

// interface IDirectors {
//   directors: {
//     type: [string];
//   };
// }

// interface IGenres {
//   genres: {
//     type: [string];
//   };
// }
// interface IWriters {
//   genres: {
//     type: [string];
//   };
// }

// interface IAwards {
//   wins: number;
//   nominations: number;
//   text: string;
// }

// interface IImdb {
//   rating: number;
//   votes: number;
//   id: null;
// }

// interface ITomatoes {
//   viewer: IViewer;
//   lastUpdated: number;
// }
// interface IViewer {
//   rating: number;
//   numReviews: number;
//   meter: number;
// }

interface IMovies {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
}

function MoviesData(): JSX.Element {
  const [movies, setMovies] = useState<IMovies[]>([]);

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
    <>
      <h1>Movies API</h1>

      {movies.map((movie, index) => {
        return <h3 key={index}>{movie.plot}</h3>;
      })}

      {movies.map((movie, index) => {
        return <h3 key={index}>{movie.languages}</h3>;
      })}

      {/* {movies} */}

      {/* {movies.map((e, index) => (
        <p key={index}> {e.cast} </p>
      ))} */}
    </>
  );
}

export default MoviesData;
