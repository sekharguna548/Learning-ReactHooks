/* eslint-disable no-unused-vars */

import React from 'react'
import { useState } from 'react'

 function Upstate1 () {

const [color, setColor] = useState("red")
  
const changeColor = () => {
    setColor("blue");
}
  return (
    <div>
<h1> My Fvaorite color is {color} </h1>
<button onClick={changeColor}>Blue</button>
    </div>
  )
}
export default Upstate1;