import "./App.css";
import { useEffect, useState } from "react";
import InputForm from "./component/InputForm";
import UpdateForm from "./component/UpdateForm";

const GET_DATA_URL = "http://localhost:8080/data";
const DELETE_DATA_URL = "http://localhost:8080/data";

function App() {
  const [data, setData] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false); //4tii shag
  const [currentData, setCurrentData] = useState({});

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

  //tretii shag
  function handleEdit(data) {
    console.log(data);
    setCurrentData(data);
    setIsOpenForm(true);
  }
  return (
    <div className="App">
      <h1> day51 React express FullStack APP dataBASE</h1>

      <InputForm
        isloaded={isloaded}
        setIsLoaded={setIsLoaded}
        setData={setData}
      />
      {isOpenForm ? (
        <UpdateForm
          setCurrentData={setCurrentData}
          currentData={currentData} //5ii shag
          setData={setData}
        />
      ) : (
        <div></div>
      )}
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
                <br />
                <button onClick={() => handleEdit(d)}> Edit </button>
                {/* //vtoroi shag */}
              </div>
            );
          })}
    </div>
  );
}

export default App;
