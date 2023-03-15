import React from "react";
import movieData from "../Data/Movies";
import { useLocation, useParams } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  console.log("hi")
  //   const location = useLocation();
  //   console.log(location.state);
  // console.log(params);
  const movie = movieData.filter((data, index) => data.id == id);
  console.log(movie);
  return (
    <div>
      <h1> Movie ditail {id} </h1>
      {movie &&
        movie.map((m, index) => {
          return (
            <div key={index}>
              <p> {m.name}</p>
              <p> {m.ISBN}</p>
            </div>
          );
        })}
    </div>
  );
}
