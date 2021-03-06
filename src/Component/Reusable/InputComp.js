import { Input } from 'antd'
import React from 'react'

function InputComp({
    className = "",
    placeholder = "",
    value = "",
    onChange = () => {},
    size = "default",
    style = {},
    status = "", //error or warning
    readOnly = false,
    type = "",
  }) {

  return (
    <div> 
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size={size}
      style={style}
      status={status}
      readOnly={readOnly}
      type={type}
      className={className}
    />
  </div>
   
  )
}
export default InputComp;

