import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { createUser, fetchAllData } from "./services/usersServices";
import { deleteUser, updateUser } from "./services/axiosUsersServices";

function App() {
  const URL = "http://localhost:8080/users"; //5tii shag
  const newUser = {
    id: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers);
  }

  async function handleSubmit(e) {
    //2nd shag
    e.preventDefault();

    if (!isUpdate) {
      createUser(
        currentUser,
        URL,
        setUsers,
        setIsUpdate,
        setCurrentUser,
        newUser
      );
    } else {
      updateUser(e, URL, setUsers);
    }
  }

  async function handleEdit(userId) {
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];

    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username,
      });
    }
  }

  function handleUserName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }

  function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }

  return (
    <div className="App">
      <h1> day-52 NodeJS FS Module </h1>
      <h3> Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        {/* //1st shag */}
        <label>
          User Name:
          <input
            name="username"
            value={currentUser.username}
            onChange={handleUserName}
          />
        </label>
        <br />
        <label>
          User Age:
          <input name="age" value={currentUser.age} onChange={handleUserAge} />
        </label>
        <br />
        <button> {isUpdate ? "UPDATE" : "SUBMIT"} </button>
      </form>
      <h3> USERS LIST </h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}
                <button onClick={() => handleDelete(user.id)}> DELETE </button>
                <button onClick={() => handleEdit(user.id)}> EDIT </button>
              </p>
            </div>
          );
        })}

      {/* <EditForm /> */}
    </div>
  );
}

export default App;
