import React from 'react'
import { Link, useLocation} from "react-router-dom";



export default function AboutPage() {

    const location = useLocation()
    const state = location.state;



  return (
    <div>AboutPage
        <h1 >{state.message} </h1>
    <Link to={"/"}> BACK </Link>
    </div>
  )
}
