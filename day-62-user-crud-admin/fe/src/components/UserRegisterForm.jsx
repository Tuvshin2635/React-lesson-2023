import React from "react";
import { Grid, Button, TextField, InputLabel } from "@mui/material";
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useEffect } from "react";

export default function UserRegisterForm() {
  const URL = "http://localhost:8080/register";
  const ROLE_URL = "http://localhost:8080/users/roles";

  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  }

  function handleSelectChange(e) {
    console.log(e.target.value);
    setCurrentRole(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    if (FETCHED_JSON) {
      NavigationPreloadManager("/users");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0}>
          <TextField
            id="firstname"
            name="firstname"
            variant="filled"
            size="small"
            defaultValue=""
            label="First Name"
          ></TextField>
        </Grid>
        <Grid container spacing={0}>
          <TextField
            id="lastname"
            name="lastname"
            variant="filled"
            size="small"
            defaultValue=""
            label="Last Name"
          ></TextField>
        </Grid>
        <Grid container spacing={0}>
          <TextField
            id="email"
            name="email"
            variant="filled"
            size="small"
            defaultValue=""
            label="Email"
          ></TextField>
        </Grid>
        <Grid container spacing={0}>
          <TextField
            id="password"
            name="password"
            variant="filled"
            size="small"
            defaultValue=""
            label="Password"
          ></TextField>
        </Grid>
        <Grid container spacing={0}>
          <TextField
            id="Password"
            name="confirm"
            variant="filled"
            size="small"
            defaultValue=""
            label="Confirm Password"
          ></TextField>
        </Grid>
        <Grid container spacing={0}>
          <TextField
            id="address"
            name="address"
            variant="filled"
            size="small"
            defaultValue=""
            label="Address"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>USER ROLES</InputLabel>
          <Select
            id="role-selector"
            value={currentRole}
            label="Roles"
            onChange={handleSelectChange}
          >
            {roles &&
              roles.map((role) => {
                return <MenuItem value={role.id}>{role.name}</MenuItem>;
              })}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" type="submit">
            SUBMIT
          </Button>
        </Grid>
      </form>
    </div>
  );
}
