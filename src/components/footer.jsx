import React, { useContext } from 'react'
import { AppContext } from '../useContext/AppContext'



const Footer = () => {
const phone = useContext(AppContext)





  return (
    <div>
        <h2>footer</h2>

      <h3>phone: {phone} </h3>
    </div>
  )
}

export default Footer