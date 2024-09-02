import React, {useRef, useState,  useEffect}
 from 'react';
// useref used to store refereance of an element not an value(for value use staet we use)

//useref wont get rerender
//It can be used to access a DOM element directly.


//1 .Persisting Values: Keeping track of mutable values that don't require a re-render.
function Learn1 () {
const[value, setValue] = useState(0);
const count=useRef(0);

useEffect(()=> {
    count.current=count.current+1;
});




return (
    <div>
<button onClick = {() =>{setValue(prev => prev-1)}}>-1</button>
   <h1>{value}</h1>
<button onClick = {() =>{setValue(prev => prev+1)}}>+1</button>
<h1>render count:{count.current}</h1>


    </div>
)


 }

 export default Learn1;