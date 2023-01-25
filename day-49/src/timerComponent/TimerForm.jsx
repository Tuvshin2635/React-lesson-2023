import { Button } from "@mui/material";
import React from "react";
import { Card, Grid, CardContent, TextField } from "@mui/material";

export default function TimerForm({ id, title, project }) {
  const submitText = id ? "Update " : "Create";

  return (
    <div>
      TimerForm
      <Grid>
        <Card
          sx={{
            maxWidth: 345,
            margin: "0 auto",
          }}
        >
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={title}
                    variant={"outlined"}
                    label={title}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={project}
                    variant={"outlined"}
                    fullWidth={true}
                    label={project}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button color={"success"} variant={"outlined"}>
                    {submitText}
                  </Button>
                  <Button color={"success"} variant={"outlined"}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
