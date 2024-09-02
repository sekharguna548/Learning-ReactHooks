import React, {createContext } from 'react'
//usecontext
//is a react hook allows you acces data fro any comp without explicitly  passing down through props at every level

//used to manage global data 
 
// three steps
// 1.creating useContext
// 2.providng context'
// 3.consuming context


//creating context
export const  AppContext = createContext ();
const phone="+91 123456789"
const ContextProvider = (props) => {

    return (
        <AppContext.Provider value ={phone}>
            {props.children}
        </AppContext.Provider>
    )
}


export default ContextProvider