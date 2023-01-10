import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Component/HandleUp";
import Head from "./Component/Head";

function App() {
  function handleUpVote(props) {
    // console.log("upvoted");
    console.log(props);
  }

  return (
    <div className="App">

    {/* <Head /> */}
      
      <header className="App-header">
        <h2>
          Popular Product <hr></hr>
        </h2>
        <div className="big-container">
          <div className="container">
            <img src="image-yellow.png"></img>
            <div className="text">
              <a
                onClick={() => {
                  handleUpVote();
                }}
              >

                <p>
                  {" "}
                  <i class="fa-sharp fa-solid fa-eject"></i> 55{" "}
                </p>
              </a>
              <p className="text1"> Haught or Naught</p>
              <p> High- minded or absent- minded? You decide</p>

              <p className="text3">
                {" "}
                Submitted by: <i class="fa-brands fa-facebook"></i>
              </p>
            </div>
          </div>
          <div className="container">
            <img src="image-aqua.png"></img>
            <div className="text">
              <p>
                {" "}
                <i class="fa-sharp fa-solid fa-eject"></i> 44{" "}
              </p>
              <p className="text1"> yellow Pail</p>
              <p> On - demand sand castle construction expertise</p>
              <p className="text3">
                {" "}
                Submitted by: <i class="fa-brands fa-twitter"></i>{" "}
              </p>
            </div>
          </div>{" "}
          <div className="container">
            <img src="image-rose.png"></img>
            <div className="text">
              <p>
                {" "}
                <i class="fa-sharp fa-solid fa-eject"></i> 44{" "}
              </p>
              <p className="text1"> yellow Pail</p>
              <p> On - demand sand castle construction expertise</p>
              <p className="text3">
                {" "}
                Submitted by: <i class="fa-brands fa-twitter"></i>{" "}
              </p>
            </div>
          </div>{" "}
          <div className="container">
            <img src="image-steel.png"></img>
            <div className="text">
              <p>
                {" "}
                <i class="fa-sharp fa-solid fa-eject"></i> 44{" "}
              </p>
              <p className="text1"> yellow Pail</p>
              <p> On - demand sand castle construction expertise</p>
              <p className="text3">
                {" "}
                Submitted by: <i class="fa-brands fa-twitter"></i>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* <greet/> */}
    </div>
  );
}

export default App;
