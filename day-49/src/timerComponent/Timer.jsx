import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Typography, Box } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import TimerActionButton from "../timerComponent/TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  runningTime,
}) {
  //gadnaas avax xeseg

  const [TimerRunning, setTimerRunning] = useState(false);
  //   const [runningInterval, setRunningInterval] = useState;

  const timer = renderElapsedString(elapsed, runningSince);

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 auto",
          marginBottom: 5,
        }}
      >
        <Typography sx={{ fontSize: 28 }}>{title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            allignItems: "Center",
          }}
        >
          <h1> {runningTime}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            allignItems: "Center",
          }}
        >
          <h1> {timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <h1> {elapsed} </h1>
          <DeleteForeverIcon />
          <EditIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={TimerRunning}
          onStartClick={() => {
            setTimerRunning(true);
          }}
          onStopClick={() => {
            setTimerRunning(false);
          }}
        ></TimerActionButton>
      </Card>
    </Container>
  );
}
