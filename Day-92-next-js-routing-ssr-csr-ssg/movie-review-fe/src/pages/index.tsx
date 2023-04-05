import NavigationBar from "@/components/navigation.bar";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "./navbar";
import NewUpcoming from "./newUpcoming";
import MoviesData from "./movies";

export default function Home(props: any): JSX.Element {
  console.log(props);

  const side = typeof window ? "client" : "server";
  return (
    // <div className={styles.main}>
    //   <NavigationBar />
    //   <div> Welcome! </div>
    //   <div> you are on {side}-side </div>
    //   <Link href="/about"> ABOUT </Link> <br></br>
    //   <Link href="/greeting/John?age=25"> Greeting Page</Link>
    //   <br></br>
    //   <Link
    //     href={{
    //       pathname: "/posts/2021-08-01/first_post",
    //       query: { date: "2000-09-9", slug: "first-post" },
    //     }}
    //   >
    //     POST{" "}
    //   </Link>
    // </div>

    <div className={styles.main}>
      <Navbar />
      <MoviesData />
      {/* <MoviesData /> */}
    </div>
  );
}
