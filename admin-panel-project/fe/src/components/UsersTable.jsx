import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { Box, Stack } from "@mui/system";
import { Button, ListItemButton } from "@mui/material";

export default function UsersTable() {
  const URL = "http://localhost:8080/users";
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

  async function handleDelete(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full Name",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstname || ""} ${params.row.lastname || ""}`,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "email",
      headerName: "E-mails",
      sortable: false,
      width: 200,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "editBelBnt",
      headerName: "Buttons",
      description:
        "You can change your information Thanks, Wakanda forever haha",
      sortable: false,
      width: 190,
      renderCell: (params) => {
        return (
          <Box>
            <Stack direction="row" spacing={1}>
              <ListItemButton to={"/EditUserList"}>
                <Button variant="outlined" color="success">
                  Edit
                </Button>
              </ListItemButton>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  handleDelete(params.row.id);
                }}
              >
                Delete
              </Button>
            </Stack>
          </Box>
        );
      },
    },
  ];
  return (
    <Box
      style={{
        marginLeft: -80,
        // paddingRight: 100,
        // marginTop: 10,
        height: 400,
        // width: "100%",
      }}
    >
      {users && (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      )}
    </Box>
  );
}
