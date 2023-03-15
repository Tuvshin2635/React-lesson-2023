import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p> About medvvvv </p>
      <a href="/about/tuvshee"> Tuvshee </a>
      <Outlet />
    </div>
  );
}
