import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  Radio,
} from "@mui/material";
import { Box } from "@mui/system";

import React from "react";

export default function User_role() {
  return (
    <div>
      <div>
        <form>
          <h3> User Role </h3>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              name="User_Name_id"
              id="outlined-basic"
              label="User Role Id"
              // value={password}
              variant="outlined"
            />
            <TextField
              name="userRoleName"
              id="outlined-basic"
              label="User Role"
              // value={password}
              variant="outlined"
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                User Role
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
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="topUser"
                  control={<Radio />}
                  label="Top User"
                />
              </RadioGroup>
            </FormControl>
            <Button type="submit" variant="contained" color="success">
              Success
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}
