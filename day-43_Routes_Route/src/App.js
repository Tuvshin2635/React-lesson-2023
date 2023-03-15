import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Login from "./component/Login";
import Register from "./component/Register";
import { Link } from "react-router-dom";
import { Home } from "./component/Home";
import Test from "./component/Test";
import Tuvshee from "./component/about/Tuvshee";
import NotFound from "./component/notFound";

function App() {
  return (
    <div>
      <h1> ROUTER sur</h1>

      <Link to="/">
        <button> HOME</button>
      </Link>
      <Link to="about">
        <button> about</button>
      </Link>
      <Link to="login">
        <button> login</button>
      </Link>
      <Link to="regsiter">
        <button> Register</button>
      </Link>

      <div>
        {/* <Formfunction /> */}
        <Routes>
          <Route path="/about/*" element={<About />}>
            <Route path="tuvshee" element={<Tuvshee />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/regsiter" element={<Register />} />
        </Routes>
      </div>
    </div>
  );

  // uuruu xiisen n down
  // function sendMessage(text) {
  //   return new Promise(resolve => {
  //     setTimeout(resolve,2000);
  //   })
  // }

  // async function handleSubmit () {
  //   return await
  // }

  //   return (
  //     <div className="App">

  //       <h1> Fill the form</h1>
  //       <input type="text" placeholder="fill the..." value={text} onChange={(e) => setText(e.target.value)} />
  //       <button onClick={sendMessage} > SEND </button>

  //       <h3>
  //           {name.map((name) => (
  //             <li key={name.id}>{name.name}</li>
  //           ))}
  //         </h3>

  //     </div>
  //   );
  // }
}
export default App;
