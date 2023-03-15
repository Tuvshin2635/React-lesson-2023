import { useState } from "react";


export function List() {
    let nextId = 0;
  
    const [text, setText] = useState("");
    const [name, setName] = useState([]);
    return (
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => {
            setText("");
            setName([...text, { id: nextId++, name: name }]);
          }}
        >
          Add
        </button>
        <h3>
          {name.map((name) => (
            <li key={name.id}>{name.name}</li>
          ))}
        </h3>
      </div>
    );
  }