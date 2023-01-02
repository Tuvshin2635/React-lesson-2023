import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>
          Popular Product <hr></hr>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </h2>
        <div className="big-container">
          <div className="container">
            <img src="image-yellow.png"></img>
            <div className="text">
              <p> <i class="fa-sharp fa-solid fa-eject"></i>   55 </p>
              <p className="text1"> Haught or Naught</p>
              <p> High- minded or absent- minded? You decide</p>
              <p className="text3"> Submitted by: <i class="fa-brands fa-facebook"></i></p>
            </div>
          </div>
          <div className="container">
            <img src="image-aqua.png"></img>
            <div className="text">
              <p> <i class="fa-sharp fa-solid fa-eject"></i>  44 </p>
              <p className="text1"> yellow Pail</p>
              <p> On - demand sand castle construction expertise</p>
              <p className="text3"> Submitted by: <i class="fa-brands fa-twitter"></i> </p>

            </div>
          </div>
        </div>



      </header>




    </div>
  );
}


export default App;

