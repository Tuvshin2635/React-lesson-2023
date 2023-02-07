import React from "react";

export default function Book({ item }) {
  return (
    <li>
      {item.title} - {item.price}
    </li>
  );
}
