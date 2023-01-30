import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users"; //5tii shag

  const [users, setUsers] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    // fetch a data form localhost8080/users
    const FETCHED_DATA = await fetch(URL); //response
    const FETCHED_JSON = await FETCHED_DATA.json(); //{status:succes data: [{}]}
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    //2nd shag
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData), //3tei shag damjuulax part
    };

    const FETCHED_DATA = await fetch(URL, options); //4tii shag
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options); //4tii shag
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  return (
    <div className="App">
      <h1> day-52 NodeJS FS Module </h1>
      <h3> Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        {/* //1st shag */}
        <label>
          User Name:
          <input name="username" />
        </label>
        <br />
        <label>
          User Age:
          <input name="age" />
        </label>
        <br />
        <button> SUBMIT </button>
      </form>
      <h3> USERS LIST </h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}
                <button onClick={() => handleDelete(user.id)}> DELETE </button>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
