import React from "react";
import UsersTable from "../components/UsersTable";
import ListItemButton from "@mui/material/ListItemButton";

import Button from "@mui/material/Button";

export default function Users() {
  return (
    <div>
      <UsersTable />
      <Button variant="outlined" color="success">
        <ListItemButton to={"/CreatNewUser"}>REGISTER</ListItemButton>
      </Button>
    </div>
  );
}
