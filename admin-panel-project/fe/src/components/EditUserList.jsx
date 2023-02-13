import { Box, Button, makeStyles, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function EditUserList() {
  const UPDATE_URL = "http://localhost:8080/data";

  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState();

  // const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(currentUser.target.name.value);

    const putData = {
      firstname: currentUser.target.firstname.value,
      lastname: currentUser.target.lastname.value,
      age: currentUser.target.age.value,
      email: currentUser.target.email.value,
    };
    // sendPutRequist(putData);

    const options = {
      method: "PUT",
      Headers: {
        "Content-Type": "applicatoin/json",
      },
      body: JSON.stringify(putData),
    };
    const FETCHED_DATA = await fetch(UPDATE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON);
  }

  function handleFirstName(e) {
    setCurrentUser({ ...currentUser, title: e.target.value });
  }

  function handleLastName(e) {
    setCurrentUser({ ...currentUser, lastname: e.target.value });
  }

  function handleAge(e) {
    setCurrentUser({ ...currentUser, age: e.target.value });
  }

  function handleEmail(e) {
    setUsers({
      ...currentUser,
      email: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> EDIT FORM </h3>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: 1000,
            marginLeft: 40,
          }}
        >
          <TextField
            name="firstname"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            // defaultValue={currentUser.firstname}
            onChange={handleFirstName}
          />
          <TextField
            name="lastname"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            // defaultValue={currentUser.lastname}
            onChange={handleLastName}
          />
          <TextField
            name="age"
            id="outlined-basic"
            label="Age"
            // value={age}
            variant="outlined"
            // defaultValue={currentUser.age}
            onChange={handleAge}
          />
          <TextField
            name="email"
            id="outlined-basic"
            label="email"
            variant="outlined"
            // defaultValue={currentUser.email}
            onChange={handleEmail}
          />
          <TextField
            name="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
        </Box>
      </form>
      <Button className="btn" type="submit" variant="outlined" color="success">
        UPDATE
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </div>
  );
}
