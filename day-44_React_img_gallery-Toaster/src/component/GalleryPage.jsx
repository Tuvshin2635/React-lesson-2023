import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

export default function Gallery() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
  ];

  return (
    <div>
      Gallery
      <ImageGallery items={images} />
      <Link to={"/"}> BACK </Link>
    </div>
  );
}
