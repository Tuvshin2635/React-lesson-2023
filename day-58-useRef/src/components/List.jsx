import React from "react";
import Place from "./Place";
import { places } from "../data/Data";

export default function List() {
  return (
    <div>
      {places.map((place, index) => {
        return <Place key={index} place={place} />;
      })}
    </div>
  );
  //   return <div>{/* <Place /> */}</div>;
}
