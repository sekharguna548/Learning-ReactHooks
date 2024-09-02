import React, {useState, useEffect} from 'react'


function Learn () {


const[count, setCount ] = useState(0);

useEffect(() => {
    setTimeout(() => {
        setCount(count => count +1);
    },1000)
}, [])



    return (
        <div>
            <h1>rendered 0 times {count }</h1>
        



        </div>
    )
}


export default Learn;