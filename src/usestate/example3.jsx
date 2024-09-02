/* eslint-disable no-unused-vars */
import react from "react";
import { useState } from "react";

function Useexample () {

const [count, setCount] = useState(0);

 const increaseCount = () => {
    
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
 }
    return (
        <div>
       <h1> count:{count}</h1>
       <button onClick={increaseCount}>Incrase by 4</button>
        </div>
    )
} 

export default Useexample;