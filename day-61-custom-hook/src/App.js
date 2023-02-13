import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <h1>Day Custom HOOK</h1>

      <Header />
      <Body />
      <Footer />

      {/* <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
    </div>
  );
}
