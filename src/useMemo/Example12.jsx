

// What is useMemo?
// useMemo is a React hook that helps you optimize performance by memoizing (caching) the result of a calculation. This means React will remember the result of a function so it doesn't have to recalculate it on every render.

// Why Use useMemo?
// In React, components re-render whenever their state or props change. Sometimes, calculations or operations inside a component can be expensive, and if they are re-run on every render, it can hurt performance.



// PERFORANCE OPTIMISING HOOKS

// useMemo    returns memorised value
// useCallback returns memorised function




// useMemo helps with this by:

//1 Caching Results: It saves the result of a calculation.

//2.Avoiding Unnecessary Computations: It recalculates the result only when specific dependencies change.

// Syntax
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

import React, {useState, useMemo} from 'react';


function MemoExample () {

const [number, setNumber] = useState(0)
const [a, setA] = useState(0);
const [b, setB] = useState(0);
const[count,setCount]=useState(0);

   const increaseCount = () => {
        setCount(count + 1);
    }
const updateNumber = (e) =>{
    setNumber(e.target.value);
}

const updateA = (e) =>{
    setA(e.target.value);
}

const updateB = (e) =>{
    setB(e.target.value);
}
return (
    <div>
        number of sqaure <input type="number"  value= { number}  onChange={updateNumber}/>
<br></br>

number of Add <input type="number"  value= { a}  onChange={updateA}/>
<br></br>


number of Multiplication<input type="number"  value= { b}  onChange={updateb}/>
<br></br>

<button onClick={increaseCount}></button>

<br></br>

<h1>{count}</h1>
    </div>
)

}

function square (number) {
    console.log("square root");
    return Math.pow (number,2);
}


function add (a) {
    console.log("Add");
    return a+10;
}

function  multiply (b) {
    console.log("mu");
    return b*10;
}




export default MemoExample ;