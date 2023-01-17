import React from 'react'
import { Link, useLocation} from "react-router-dom";


export default function HomePage() {

    const location = useLocation()
    const state = location.state;




  return (
    <div>HomePage
        <h1> {state.message}</h1>
        <p> {state.timestamp}</p>
    <Link to={"/"}> BACK </Link>

    </div>
  )
}
