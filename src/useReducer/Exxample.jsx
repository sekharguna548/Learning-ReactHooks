import React, {useState} from 'react'
 









// USEREDUCER

// Similar to useState but intead of providing state and setter function .
// it provides state and dispatch function
//

// USEREDUCER ACCEPTS TWO FUNC

// 1.Reducer Function
// 2.Initial stayte
// returns current state and Dispatch

//species how state get updatqed


function AppUse () {

const[count, setCount]=useState(0)


    return (
        <>

<h1>{count}</h1>

<button onClick={()=>SetCount(prev=>prev+1)}>ince</button>
<button onClick={()=>SetCount(prev=>prev-1)}>decee</button>



        </>
    )
}


export default AppUse