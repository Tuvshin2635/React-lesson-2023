// import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Userinfo() {
  const userName = useContext(UserContext);
  return <span> {userName} </span>;
}
