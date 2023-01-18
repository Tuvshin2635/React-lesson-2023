import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <nav>
        <Link
          to="/Login"
          className={activeIndex === 0 ? "active" : ""}
          setActiveIndex={() => setActiveIndex(2)}
          replace={true}
        >
          Login
        </Link>
        <Link
          to="/Register"
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          Register
        </Link>
        {/* <Link to="/Accordion" className="active">
          Accordion
        </Link> */}
      </nav>
    </div>
  );
}
