import { DatePicker } from 'antd'
import React from 'react'

function InputDateComp({ text = "text" , place="", type="", myStyle="inputStyle", vlaue,name ,onChange=()=>{}}) {
  const dateFormate="YYYY/MM/DD"
  return (
    <>
    <span className='inputFormText'> {text} </span><br/>
      <DatePicker format={dateFormate}  type={type}  value={vlaue} name={name} onChange={onChange} className={myStyle} placeholder={place} />
      </>
  )
}

export default InputDateComp