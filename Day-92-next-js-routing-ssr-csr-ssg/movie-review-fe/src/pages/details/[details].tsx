import Navbar from "@/pages/navbar";
import Image from "next/image";
import React from "react";
import axios from "axios";

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

const URL = "http://localhost:8080/movies/details";

// popiitka menya

export default function Movies({ movie }: { movie: any }): JSX.Element {
  return (
    <div>
      <Navbar />
      <div>
        <Image src={movie[0].poster} alt="poster ALGA BOLJEE" />
        <p>{movie[0].fullplot}</p>
        <h1> {movie[0].title} </h1>
      </div>
    </div>
  );
}
// export async function getServerSideProps(req: any) {
//   const { details } = req.params;

//   const res = await axios(`http://localhost:8080/movies/byid/${details}`);
//   const data = await res.data;

//   return {
//     props: { data },
//   };
// }
export async function getServerSideProps(req: any) {
  const { details } = req.params;
  const FETCHED_DATA = await fetch(
    `http://localhost:8080/movies/byid/${details}`
  );
  const FETCHED_JSON = await FETCHED_DATA.json();
  console.log(FETCHED_JSON);

  console.log(details);
  return {
    props: {
      movie: FETCHED_JSON,
    },
  };
}

// const MovieDetails = ({ movie }: { movie: any }) => {
//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.plot}</p>
//       <p>Year: {movie.year}</p>
//       <p>Director: {movie.directors.join(", ")}</p>
//     </div>
//   );
// };

// export async function getServerSideProps(context: any) {
//   const { id } = context.params;
//   const res = await fetch(`http://localhost:8080/movies/byid/${id}`);
//   const movies = await res.json();

//   return {
//     props: {
//       movie: movies[0],
//     },
//   };
// }

// export default MovieDetails;
