import React from "react";
import styles from "@/styles/Home.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftNavbar}>
        <img
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
          alt="logo"
        ></img>
        <input
          className={styles.input}
          placeholder="search movies, TV, actors, more..."
        />
      </div>
      <div className={styles.rigthNav}>
        <div className={styles.rightTop}>
          <button>What's the Tomatometer®?</button>
          <button>Critics</button>
          <button>Login SignUp</button>
        </div>
        <div className={styles.rightBottom}>
          <button>MOVIES</button>
          <button>TV SHOWS</button>
          <button>MOVIE TRIVIA</button>
          <button>NEWS</button>
          <button>SHOWTIMES</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
