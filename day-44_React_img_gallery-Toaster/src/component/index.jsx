
import { Link } from "react-router-dom";


const aboutPageData = {
    from: "Index",
    message: "welcome to  about PAGE",
    timestamp: Date.now()
}

const homePageData = {
    from: "Index",
    message: "welcome to  home PAGE",
    timestamp: Date.now()
}


export default function Index() {
  return (
    <div>
      <h1> Day 44 Dynamic Routing</h1>
      <nav>
        <Link to={"/about"} state={aboutPageData} > About Page</Link>
        <Link to={"/home"} state={homePageData} > Home Page</Link>
        <Link to={"/accordion"} state={homePageData}> Accordion Page</Link>
        <Link to={"/movies"} state={homePageData}> Movies Page</Link>
        <Link to={"/gallery"}> Image gallery </Link>
        <Link to={"/toaster"}> Toaster Page </Link>

      </nav>
    </div>
  );
}
