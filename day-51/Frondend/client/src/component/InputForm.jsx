import React from "react";

const POST_DATA_URL = "http://localhost:8080/data";

export default function InputForm({ isloaded, setIsLoaded, setData }) {
  async function postData(data) {
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //objectoos string bolgox command
    };

    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
    console.log(FETCHED_DATA);
    if (FETCHED_DATA) {
      setIsLoaded(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
    };
    setIsLoaded(true);
    postData(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          NAME:
          <input placeholder="Name" name="name" />
        </label>
        <label>
          MAJOR
          <input placeholder="Major" name="major" />
        </label>
        <button> SUBMIT </button>
      </form>
    </div>
  );
}
