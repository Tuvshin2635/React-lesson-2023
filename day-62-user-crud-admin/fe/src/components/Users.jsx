import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";

export default function Users() {
  const URL = "http://localhost:8081/users";
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users list</h1>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifuContent="center"
      >
        <Grid>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Role</th>
              </tr>
            </thead>
          </table>
        </Grid>

        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.role.name}</td>
                </tr>
              );
            })}
        </tbody>
      </Grid>
    </div>
  );
}
