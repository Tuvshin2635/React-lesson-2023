import React from "react";
import Navbar from "../navbar";
import axios from "axios";
import Image from "next/image";

export default function Movies({ data }: { data: any }): JSX.Element {
  return (
    <div>
      <Navbar />
      <div>
        <img className="w-1/4" src={data.poster} alt="POSTER GDE??" />
        <p className="font-black border-l-4 border-red-900 ">
          {" "}
          {data.title}
        </p>{" "}
        <br></br>
        <div className="flex">
          <img
            className="w-8"
            src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg"
          />
          <p className="text-2xl"> {data.imdb.rating}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const res = await axios(`http://localhost:8080/movies/byid/${id}`);
  const data = await res.data;

  return {
    props: { data },
  };
}
