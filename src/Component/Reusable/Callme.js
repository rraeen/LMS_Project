import React, { useState } from 'react'
import InputComp from './InputComp'


function Callme() {
    const [username, setusername] = useState({})
  return (
      <InputComp  placeholder={"hello"}/>
    
  )
}

export default Callme