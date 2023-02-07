// import React, { useContext } from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

export default function Userinfo() {
  const bookName = useContext(BookContext);
  return (
    <span>
      <Book />
    </span>
  );
}
