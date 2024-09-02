import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../useContext/AppContext'


const Contacts = () => {
    const phone = useContext(AppContext)




  return (
    <div>
        <h2>contacts</h2>
        <h4>phone:{phone}</h4>

    </div>
  )
}

export default Contacts;