import { Input, InputNumber } from 'antd'
import React from 'react'
import './Rform.css'

export const InputComp=({ text = "text" , place="", type="", myStyle="inputStyle"})=> {
  return (
    <>
    
     <span className='inputFormText'> {text} </span><br/>
      <Input type={type} className={myStyle} placeholder={place} />
      
    </>
  )
}
export const InputCompNum=({ text = "text" , place="", type="", myStyle="inputStyle"})=> {
    return (
      <>
      
       <span className='inputFormText'> {text} </span><br/>
        <Input prefix="+91 |" type={"tel"} className={myStyle} placeholder={place} />
      </>
    )
  }

