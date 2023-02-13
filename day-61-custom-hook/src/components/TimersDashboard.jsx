import { useContext, useEffect, useState } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";

export default function TimersDashboard() {
  const URL = "http://localhost:8080/timers";

  // useEffect(() => {
  //   fetchTimersData();
  // }, []);

  return (
    <div>
      <h1>Timers</h1>
      <div>
        <EditableTimerList />
        <ToggleableTimerForm
        // onFormSubmit={handleCreateFormSubmit}
        />
      </div>
    </div>
  );
}
