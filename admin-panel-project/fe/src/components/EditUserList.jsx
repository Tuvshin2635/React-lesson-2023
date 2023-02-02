import { Box, Button, makeStyles, TextField } from "@mui/material";
import React from "react";

// const styles = makeStyles() {
//     btn: {
//         marginLeft :40,
//     }
// }

export default function EditUserList() {
  return (
    <div>
      <form
      //   onSubmit={handleSubmit}
      >
        <h3> EDIT form </h3>
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

// import { Box, TextField } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import Button from "@mui/material/Button";

//   const URL = "http://localhost:8080/users";

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   async function fetchAllData() {
//     const FETCHED_DATA = await fetch(URL);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setUsers(FETCHED_JSON.data);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const postUserData = {
//       firstname: e.target.firstname.value,
//       lastname: e.target.lastname.value,
//       age: e.target.age.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };
//     console.log("data", postUserData);

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postUserData),
//     };

//     console.log(options);
//     const FETCHED_DATA = await fetch(URL, options);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setUsers(FETCHED_JSON.data);
//     console.log(FETCHED_JSON);
//   }

// }
