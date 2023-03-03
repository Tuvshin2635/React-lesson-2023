import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  TextField,
  RadioGroup,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreatNewUser() {
  const URL = "http://localhost:8080/users";

  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(true);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
    // navigate("/users");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postUserData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      age: e.target.age.value,
      email: e.target.email.value,
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
            name="email"
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            name="password"
            id="outlined-basic"
            label="password"
            // value={password}
            variant="outlined"
          />
          {/* // radio */}
          <TextField
            name="userRole"
            id="outlined-basic"
            label="User Role"
            // value={password}
            variant="outlined"
          />
          {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              User Role{" "}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="user"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel
                value="topUser"
                control={<Radio />}
                label="Top User"
              />
            </RadioGroup>
          </FormControl> */}
          {/* // radio */}
          <Button
            onClick={handleClose}
            type="submit"
            variant="contained"
            color="success"
          >
            Success
          </Button>
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert severity="success" sx={{ width: "100%" }}>
              Added new user !
            </Alert>
          </Snackbar>
        </Box>
      </form>
    </div>
  );
}
