import "./App.css";
import { useEffect, useState } from "react";
import InputForm from "./component/InputForm";

const GET_DATA_URL = "http://localhost:8080/data";
const DELETE_DATA_URL = "http://localhost:8080/data";

function App() {
  const [data, setData] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const FETCHED_DATA = await fetch(GET_DATA_URL);
      const FETCHET_JSON = await FETCHED_DATA.json();
      setData(FETCHET_JSON);
    }
    fetchData();
  }, []);

  async function deleteData(d) {
    console.log(d);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    };
    const FETCHED_DATA = await fetch(DELETE_DATA_URL, options);
    const FETCHET_JSON = await FETCHED_DATA.json();
    setData(FETCHET_JSON);
  }

  function handleDelete(id) {
    const d = {
      id: id,
    };
    deleteData(d);
  }

  return (
    <div className="App">
      <h1> day51 React express FullStack APP dataBASE</h1>

      <InputForm
        isloaded={isloaded}
        setIsLoaded={setIsLoaded}
        setData={setData}
      />
      {isloaded
        ? "...LOADING "
        : data &&
          data.map((d, index) => {
            return (
              <div>
                <p key={index}>
                  {d.name} -- {d.major}
                </p>
                <button onClick={() => handleDelete(d.id)}> Delete </button>
              </div>
            );
          })}
    </div>
  );
}

export default App;
