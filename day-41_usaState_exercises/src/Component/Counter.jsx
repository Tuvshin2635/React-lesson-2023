import { useState } from "react";

export default function Counter () {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <h1> </h1>
            <button onClick={() =>{
                setNumber(n => n +1);
            }}>
                 plus three
            </button>
        
        
        </div>
    )
}