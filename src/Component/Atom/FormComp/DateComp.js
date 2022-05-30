import { DatePicker } from 'antd'
import React from 'react'

function DateComp({
    onChange=()=>{},
    value="Date"

}) {
  return (
    <div  style={{color:"#707070", width:"20rem",padding:"10px", fontFamily:"Open Sans, Regular"}}>
    <span style={{color:"#707070", fontSize:"small", display:"inline"}}> {value} </span><br/>

    <DatePicker style={{width:"18.5rem", margin:"0px"}} onChange={onChange}  />
    </div>
  )
}

export default DateComp