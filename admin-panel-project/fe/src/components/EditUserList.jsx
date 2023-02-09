import { Box, Button, makeStyles, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function EditUserList(setData, setCurrentData, CurrentData) {
  const UPDATE_URL = "http://localhost:8080/data";

  const [currentUser, setCurrentUser] = useState();
  // const navigate = useNavigate();

  async function sendPutRequist(data) {
    const options = {
      method: "PUT",
      Headers: {
        "Content-Type": "applicatoin/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(UPDATE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setData(FETCHED_JSON);
    // navigate("/users");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentUser.target.name.value);

    const sendData = {
      firstname: currentUser.target.firstname.value,
      lastname: currentUser.target.lastname.value,
      age: currentUser.target.age.value,
      email: currentUser.target.email.value,
    };
    sendPutRequist(sendData);
  }
  function handleTitle(e) {
    setCurrentUser({ ...currentUser, title: e.target.firstname.value });
  }

  return (
    <div>
      <form
      // onSubmit={handleSubmit
      >
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
            onChange={handleTitle}
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
            name="email"
            id="outlined-basic"
            label="email"
            variant="outlined"
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
