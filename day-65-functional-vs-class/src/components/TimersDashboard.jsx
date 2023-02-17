import { useEffect, useState } from "react";
import React from "react";

import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import projects from "../data/data.js";

export default function TimersDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  class Component extends React.Component() {
    constructor(props) {
      super(props);
      this.state = { timers: [] };
      const URL = "http://localhost:8080/timers";
      // this.increase = this.increase.bind(this);

      this.createTimer = this.createTimer.bind(this);
    }

    // useEffect(() => {
    //   fetchTimersData();
    // }, []);

    // useEffect(() => {
    //   setInterval(() => setTimers({ timers: projects }), 1000);
    // }, []);

    // async function fetchTimersData() {
    //   const FETCHED_DATA = await fetch(URL);
    //   const FETCHED_JSON = await FETCHED_DATA.json();
    //   console.log(FETCHED_JSON);
    //   setTimers({ timers: FETCHED_JSON.data });
    // }

    // function
    handleCreateFormSubmit(timer) {
      this.createTimer(timer);
    }

    // function
    handleEditFormSubmit(attrs) {
      this.updateTimer(attrs);
    }

    // function
    handleTrashClick(timerId) {
      this.deleteTimer(timerId);
    }

    // function
    handleStartClick(timerId) {
      this.startTimer(timerId);
    }

    // function
    handleStopClick(timerId) {
      this.stopTimer(timerId);
    }

    // function
    createTimer(timer) {
      const t = newTimer(timer);
      this.setState({ timers: this.state.timers.concat(t) });
    }

    // function
    startTimer(timerId) {
      const now = Date.now();
      this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId) {
            console.log(timer);
            timer.runningSince = now;
            return timer;
          } else {
            return timer;
          }
        }),
      });
    }

    // function
    stopTimer(timerId) {
      const now = Date.now();

      this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId) {
            const lastElapsed = now - timer.runningSince;
            timer.elapsed = timer.elapsed + lastElapsed;
            timer.runningSince = null;
          }
          return timer;
        }),
      });
    }

    // function
    updateTimer(attrs) {
      this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === attrs.id) {
            timer.title = attrs.title;
            timer.project = attrs.project;
          }
          return timer;
        }),
      });
    }

    // function
    deleteTimer(timerId) {
      this.setState({
        timers: this.state.timers.filter((t) => t.id !== timerId),
      });
    }

    render() {
      return (
        <div>
          <h1>Timers</h1>
          {this.state.timers && (
            <div>
              <EditableTimerList
                timers={this.state.timers}
                onFormSubmit={this.handleEditFormSubmit}
                onTrashClick={this.handleTrashClick}
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
              />
              <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
            </div>
          )}
        </div>
      );
    }
  }
}
export { TimersDashboard };
