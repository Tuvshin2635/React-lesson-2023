import React from "react";
import CreatNewUser from "../components/CreatNewUser";
import UsersTable from "../components/UsersTable";
import ListItemButton from "@mui/material/ListItemButton";
import CategoryIcon from "@mui/icons-material/Category";
import ListItemIcon from "@mui/material/ListItemIcon";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

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
