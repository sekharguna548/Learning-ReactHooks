// eslint-disable-next-line no-unused-vars
import React from "react";

import { useState } from "react";




function Upsetate2 ( ) {
    // instead of declare multipele state we can declare an object in object we scan store data in key value pair

const [car, setCar]= useState({
    brand:"ferrari",
    model:"roma",
    years:"1998",
    color:"green",
    engine:"disel",
});
// change state now of an color

const changeColor = () => {
    //if u want to update and get entoire details of an object we can get entire details by using "spread operator and we can update what we want" 
        //if u wnat to updtae one thing then no need to use this
        setCar((prev) => {
        return {...prev,color:"red"}
    })
}
return (
    <div>
        <h1>My car is {car.brand } </h1>
        <h2>Its a {car.brand},
        model{car.model},
        color is {car.color},
        engine is {car.engine}
        </h2>
        <button onClick={changeColor}>Blueeeeee</button>
    </div>
)

}

export default Upsetate2;