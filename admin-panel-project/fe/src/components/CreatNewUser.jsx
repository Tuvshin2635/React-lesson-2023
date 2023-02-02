import { Box, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function CreatNewUser() {
  const URL = "http://localhost:8080/users";

  // const newUser = {
  //   firstname: "",
  //   lastname: "",
  //   age: "",
  //   password: "",
  // };

  const [users, setUsers] = useState([]);
  // const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postUserData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      age: e.target.age.value,
      password: e.target.password.value,
    };
    console.log("data", postUserData);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postUserData),
    };

    console.log(options);
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
    console.log(FETCHED_JSON);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Registration form </h3>
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
          />
          <TextField
            name="lastname"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            name="age"
            id="outlined-basic"
            label="Age"
            // value={age}
            variant="outlined"
          />
          <TextField
            name="password"
            id="outlined-basic"
            label="password"
            // value={password}
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </Box>
      </form>
    </div>
  );
}
