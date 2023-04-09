import React from "react";
import MoviesData from "./movies";

// export async function getServerSideProps() {
//   const MoviesRequest = await fetch("http://localhost:8080/movies/list");
//   const MoviesData = await MoviesRequest.json();
//   console.log(MoviesData);
//   return {
//     props: {
//       poster: MoviesData,
//     },
//   };
// }
function NewUpcoming(props: any) {
  return (
    <div>
      {/* {" "}
      {movies.map((movie, index) => {
        return <h3 key={index}>{movie.languages}</h3>;
      })} */}
    </div>
  );
}

export default NewUpcoming;
