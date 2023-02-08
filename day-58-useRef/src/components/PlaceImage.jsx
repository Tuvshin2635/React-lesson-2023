import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";
import { getImageUrl } from "../data/utils";

export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <div>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
