import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function handleRegister(event) {
    event.preventDefault();
    // console.log(event.target.firstname.value);
    // console.log(event.target.password.value);
    // console.log(event.target.lastname.value);
    // console.log(users);

    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
    };
    setUsers([...users, user]);
  }

  return (
    <div className="registerForm">
      <form className="App" onSubmit={handleRegister}>
        <label for="firstname">First name:</label>
        <input placeholder="Firstname" name="firstname" /> <br />
        <label for="lastname">Last Name:</label>
        <input placeholder="Lastname" name="lastname" /> <br />
        <label for="password">Password:</label>
        <input placeholder="Password" name="password" /> <br />
        <label for="password">Confirm Password:</label>
        <input placeholder="Confirm Password" name="confirmPassword" /> <br />
        <button> Register </button>
      </form>

      <h2> User Preview</h2>
      {users.map((u) => {
        return (
          <div>
            <div>{u.firstname}</div>
            <div>{u.lastname}</div>
            <div>{u.password}</div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
