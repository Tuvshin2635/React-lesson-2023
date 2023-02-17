import "./App.css";
import { ClassCounter } from "./components/ClassCounter";

import TimersDashboard from "./components/TimersDashboard";

export default function App() {
  return (
    <div>
      <h1>Timer App</h1>
      <TimersDashboard />
      {/* <ClassCounter /> */}
    </div>
  );
}
