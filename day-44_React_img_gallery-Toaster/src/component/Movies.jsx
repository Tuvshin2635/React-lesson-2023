import React, { useState } from "react";
import { Link } from "react-router-dom";
import movieData from "../Data/Movies";

export default function Movies() {
  const [movies, setMovies] = useState(movieData);
//   console.log(movies);
  return (
    <div>
      <h1>Movies</h1>
      {movieData.map((data, index) => {
        return (
          <Link key={index} to={`/movie/${data.id}`} state={data}>
            <div> {data.name} </div>
          </Link>
        );
      })}
      <Link to={"/"}> BACK </Link>
    </div>
  );
}
