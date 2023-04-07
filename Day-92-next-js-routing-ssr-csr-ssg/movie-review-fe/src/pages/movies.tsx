import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

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
    const FETCHED_DATA = await fetch("http://localhost:8084/movies/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
    console.log(FETCHED_JSON);
  };

  return (
    <div className="container mx-auto w-full ">
      <div
        // className={styles.small}
        className="container mx-auto flex justify-between font-serif font-bold "
      >
        <h3> NEW & UPCOMING MOVIES </h3>
        <button> VIEW ALL </button>
      </div>
      <div className="flex basis-2/12 w-full flex-wrap justify-between  ">
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <img
                className={styles.PosterImg + " hover:scale-110"}
                src={!movie.poster ? "/empty.png" : movie.poster}
              />
              <Link href={"http://localhost:3000/details/" + movie._id}>
                <p className={styles.PosterPlot}>{movie.title}</p>
              </Link>
              <p> Released Date: {movie.year} </p>
              {/* <p> {movie.tomatoes} </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesData;
