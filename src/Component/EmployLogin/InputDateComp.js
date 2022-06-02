import { DatePicker } from 'antd'
import React from 'react'

function InputDateComp({ text = "text" , place="", type="", myStyle="inputStyle"}) {
  return (
    <>
    <span className='inputFormText'> {text} </span><br/>
      <DatePicker type={type} className={myStyle} placeholder={place} />
      </>
  )
}

export default InputDateComp