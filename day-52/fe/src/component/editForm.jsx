import React from "react";

export default function EditForm() {
  return <div></div>;
}

const UPDATE_URL = "http://localhost:8080/users";

async function sendPutRequist(users) {
  const options = {
    method: "PUT",
    headers: {
      "Context-Type": "application/json",
    },
    body: JSON.stringify(users),
  };

  const FETCHED_DATA = await fetch(UPDATE_URL, options);
  const FETCHED_JSON = await FETCHED_DATA.json();
  SVGMetadataElement(FETCHED_JSON);
}
