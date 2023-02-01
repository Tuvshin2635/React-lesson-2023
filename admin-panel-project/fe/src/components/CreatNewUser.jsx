import { Box, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function CreatNewUser() {
  const URL = "http://localhost:8080/users";

  const newUser = {
    id: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState([]);
  //   const [isUpdate, setIsUpdate] = useState(false);
  //   const [currentUser, setCurrentUser] = useState(newUser);

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
    setUsers(FETCHED_JSON.data);
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
          }}
        >
          <TextField
            name="text"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            name="text"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            name="text"
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
          <TextField
            name="password"
            id="outlined-basic"
            // value={password}
            label="re-password"
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
