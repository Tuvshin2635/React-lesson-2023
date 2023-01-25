import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { newTimer } from "../timercomponent/Helpers";

import timerData from "../data/data";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimerDashboard() {
  const [timers, setTimers] = useState({ timers: [] });
  const [runningTime, setRunningTime] = useState(0);

  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 10000);
  }, []);

  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }

  function createTimer(timer) {
    const t = newTimer(timer);
    setTimers({
      timers: timers.timers.concat(t),
    });
  }

  function handelEditFormSubmit(timer) {
    updateTimer(timer);
  }

  function updateTimer(attributes) {
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === attributes.id) {
          timer.title = attributes.title;
          timer.project = attributes.project;
        }
        return timer;
      }),
    });
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  function stopTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function startTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function deleteTimer(timerId) {
    setTimers({
      timers: timers.timers.filter((t) => t.id !== timerId),
    });
  }

  // useEffect(() => {
  //   setTimers(timerData);
  //   setInterval(() => {
  //     setRunningTime(runningTime + 1);
  //   }, 1000);
  // }, [timers]);

  return (
    <div>
      <h1> Timers </h1>

      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
            onFormSubmit={handelEditFormSubmit}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}

      {/* {timerData &&
        timerData.map((data) => {
          return (
            <Timer
              project={data.project}
              title={data.title}
              elapsed={data.elapsed}
              runningSince={data.runningSince}
              runningTime={runningTime}
            />
          );
        })} */}

      {/* <TimerForm title={"title"} project={"project"} /> */}
    </div>
  );
}
